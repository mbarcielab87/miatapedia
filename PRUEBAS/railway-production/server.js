const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { db, initDatabase } = require('./database');
const auth = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ===============================
// CONFIGURACIÓN DE SEGURIDAD
// ===============================

// Helmet para headers de seguridad
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

// Logging con Morgan
app.use(morgan(process.env.LOG_FORMAT || 'combined'));

// Middleware para verificar IP autorizada (solo admin)
function checkAuthorizedIP(req, res, next) {
    const clientIP = req.headers['x-forwarded-for'] ||
                     req.headers['x-real-ip'] ||
                     req.connection.remoteAddress ||
                     req.socket.remoteAddress ||
                     req.ip;

    const authorizedIP = process.env.AUTHORIZED_ADMIN_IP || '109.111.117.182';

    // Limpiar IP (remover prefijos IPv6)
    const cleanIP = clientIP.replace(/^::ffff:/, '');

    console.log(`[IP CHECK] Cliente: ${cleanIP} | Autorizada: ${authorizedIP}`);

    if (cleanIP !== authorizedIP) {
        console.log(`[SECURITY] Acceso denegado desde IP no autorizada: ${cleanIP}`);
        return res.status(403).json({
            error: 'Acceso denegado',
            message: 'Tu dirección IP no está autorizada para esta acción',
            code: 'IP_NOT_AUTHORIZED'
        });
    }

    next();
}

// Rate limiting global
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: {
        error: 'Demasiadas peticiones',
        message: 'Has excedido el límite de peticiones. Inténtalo más tarde.'
    },
    standardHeaders: true,
    legacyHeaders: false
});
app.use(limiter);

// Rate limiting para login
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_LOGIN_MAX) || 5,
    message: {
        error: 'Demasiados intentos de login',
        message: 'Has excedido el límite de intentos de autenticación.'
    }
});

// CORS configurado para producción
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [
        'https://miatapedia.info',
        'https://miatapedia.netlify.app',
        'http://localhost:3000', // Para desarrollo local
        'http://localhost:8080'
      ];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir requests sin origin (apps móviles, Postman, etc.)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log(`[CORS] Origen bloqueado: ${origin}`);
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Sesiones
app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging de seguridad
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const ip = req.headers['x-forwarded-for'] || req.ip;

    if (req.path.includes('/admin') || req.method !== 'GET') {
        console.log(`[SECURITY] ${timestamp} - ${req.method} ${req.path} - IP: ${ip}`);
    }
    next();
});

// Inicializar base de datos
initDatabase().catch(console.error);

// ===============================
// RUTAS PÚBLICAS (SOLO LECTURA)
// ===============================

// Endpoint de salud
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: NODE_ENV
    });
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Miatapedia API funcionando correctamente',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: NODE_ENV
    });
});

// Estadísticas públicas
app.get('/api/stats', (req, res) => {
    const queries = [
        'SELECT COUNT(*) as foros FROM foros',
        'SELECT COUNT(*) as proveedores FROM proveedores',
        'SELECT COUNT(*) as manuales FROM manuales',
        'SELECT COUNT(*) as eventos FROM eventos'
    ];

    Promise.all(queries.map(query =>
        new Promise((resolve, reject) => {
            db.get(query, (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        })
    )).then(results => {
        res.json({
            foros: results[0].foros,
            proveedores: results[1].proveedores,
            manuales: results[2].manuales,
            eventos: results[3].eventos,
            updated: new Date().toISOString()
        });
    }).catch(err => {
        console.error('Error obteniendo estadísticas:', err);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    });
});

// Endpoints de datos públicos (solo GET)
const publicEndpoints = [
    { route: '/api/foros', table: 'foros', filters: ['pais'] },
    { route: '/api/clubs', table: 'foros', filters: ['pais'] },
    { route: '/api/proveedores', table: 'proveedores', filters: ['pais', 'generacion', 'tipo'] },
    { route: '/api/manuales', table: 'manuales', filters: ['generacion', 'idioma'] },
    { route: '/api/eventos', table: 'eventos', filters: ['pais_region'] },
    { route: '/api/paises', query: 'SELECT DISTINCT pais FROM foros ORDER BY pais' }
];

publicEndpoints.forEach(endpoint => {
    app.get(endpoint.route, (req, res) => {
        if (endpoint.query) {
            db.all(endpoint.query, (err, rows) => {
                if (err) {
                    console.error(`Error en ${endpoint.route}:`, err);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
                res.json(rows.map(row => row.pais || row));
            });
        } else {
            let query = `SELECT * FROM ${endpoint.table}`;
            let params = [];
            let conditions = [];

            endpoint.filters.forEach(filter => {
                if (req.query[filter]) {
                    conditions.push(`${filter} = ?`);
                    params.push(req.query[filter]);
                }
            });

            if (conditions.length > 0) {
                query += ' WHERE ' + conditions.join(' AND ');
            }
            query += ' ORDER BY id';

            db.all(query, params, (err, rows) => {
                if (err) {
                    console.error(`Error en ${endpoint.route}:`, err);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
                res.json(rows);
            });
        }
    });
});

// ===============================
// RUTAS DE ADMINISTRACIÓN (IP RESTRINGIDA)
// ===============================

// Panel de administración - solo desde IP autorizada
app.get('/admin', checkAuthorizedIP, (req, res) => {
    if (req.session.isAdmin) {
        res.sendFile(path.join(__dirname, 'admin.html'));
    } else {
        res.redirect('/admin/login');
    }
});

// Login de administración - solo desde IP autorizada
app.get('/admin/login', checkAuthorizedIP, (req, res) => {
    if (req.session.isAdmin) {
        return res.redirect('/admin');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
});

// API de login - solo desde IP autorizada
app.post('/admin/api/login', checkAuthorizedIP, authLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                error: 'Datos incompletos',
                message: 'Usuario y contraseña son requeridos'
            });
        }

        const result = await auth.authenticateUser(username, password);

        if (result.success) {
            req.session.isAdmin = true;
            req.session.username = username;
            req.session.loginTime = new Date();

            console.log(`[AUTH] Login exitoso - Usuario: ${username} - IP: ${req.ip}`);

            res.json({
                success: true,
                message: 'Autenticación exitosa',
                token: result.token,
                user: result.user
            });
        } else {
            console.log(`[AUTH] Login fallido - Usuario: ${username} - IP: ${req.ip}`);
            res.status(401).json({
                error: 'Autenticación fallida',
                message: result.message
            });
        }
    } catch (error) {
        console.error('[AUTH] Error en login:', error);
        res.status(500).json({
            error: 'Error interno del servidor',
            message: 'Ocurrió un error durante la autenticación'
        });
    }
});

// Logout
app.post('/admin/api/logout', (req, res) => {
    const username = req.session.username;
    req.session.destroy((err) => {
        if (err) {
            console.error('[AUTH] Error en logout:', err);
            return res.status(500).json({ error: 'Error cerrando sesión' });
        }
        console.log(`[AUTH] Logout exitoso - Usuario: ${username}`);
        res.json({ message: 'Sesión cerrada exitosamente' });
    });
});

// ===============================
// RUTAS PROTEGIDAS (ADMIN + IP)
// ===============================

const protectedTables = ['foros', 'proveedores', 'manuales', 'eventos'];

protectedTables.forEach(table => {
    // POST (crear) - requiere IP autorizada + autenticación
    app.post(`/api/${table}`, checkAuthorizedIP, auth.authenticateToken, auth.requireAdmin, (req, res) => {
        const data = req.body;

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ error: 'Datos requeridos' });
        }

        const fields = Object.keys(data).filter(key => key !== 'id');
        const placeholders = fields.map(() => '?').join(', ');
        const values = fields.map(field => data[field]);

        const query = `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${placeholders})`;

        db.run(query, values, function(err) {
            if (err) {
                console.error(`Error creando en ${table}:`, err);
                return res.status(500).json({ error: 'Error creando registro' });
            }

            console.log(`[ADMIN] Nuevo registro en ${table} - ID: ${this.lastID} - Usuario: ${req.user.username}`);
            res.json({
                id: this.lastID,
                message: 'Registro creado exitosamente',
                ...data
            });
        });
    });

    // PUT (actualizar) - requiere IP autorizada + autenticación
    app.put(`/api/${table}/:id`, checkAuthorizedIP, auth.authenticateToken, auth.requireAdmin, (req, res) => {
        const { id } = req.params;
        const data = req.body;
        delete data.id;

        const fields = Object.keys(data);
        if (fields.length === 0) {
            return res.status(400).json({ error: 'No hay datos para actualizar' });
        }

        const setClause = fields.map(field => `${field} = ?`).join(', ');
        const values = [...fields.map(field => data[field]), id];

        const query = `UPDATE ${table} SET ${setClause} WHERE id = ?`;

        db.run(query, values, function(err) {
            if (err) {
                console.error(`Error actualizando ${table}:`, err);
                return res.status(500).json({ error: 'Error actualizando registro' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }

            console.log(`[ADMIN] Registro actualizado en ${table} - ID: ${id} - Usuario: ${req.user.username}`);
            res.json({
                message: 'Registro actualizado exitosamente',
                changes: this.changes
            });
        });
    });

    // DELETE - requiere IP autorizada + autenticación
    app.delete(`/api/${table}/:id`, checkAuthorizedIP, auth.authenticateToken, auth.requireAdmin, (req, res) => {
        const { id } = req.params;

        db.run(`DELETE FROM ${table} WHERE id = ?`, [id], function(err) {
            if (err) {
                console.error(`Error eliminando de ${table}:`, err);
                return res.status(500).json({ error: 'Error eliminando registro' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }

            console.log(`[ADMIN] Registro eliminado de ${table} - ID: ${id} - Usuario: ${req.user.username}`);
            res.json({
                message: 'Registro eliminado exitosamente',
                changes: this.changes
            });
        });
    });
});

// ===============================
// MANEJO DE ERRORES
// ===============================

app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        message: 'La ruta solicitada no existe',
        availableEndpoints: {
            public: ['/api/test', '/api/stats', '/api/foros', '/api/proveedores', '/api/manuales', '/api/eventos'],
            admin: ['/admin/login', '/admin']
        }
    });
});

app.use((err, req, res, next) => {
    console.error('[ERROR]', err);

    if (err.message === 'No permitido por CORS') {
        return res.status(403).json({
            error: 'CORS bloqueado',
            message: 'Origen no permitido'
        });
    }

    res.status(500).json({
        error: 'Error interno del servidor',
        message: 'Ocurrió un error inesperado'
    });
});

// ===============================
// INICIAR SERVIDOR
// ===============================

app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 Miatapedia API iniciada en producción');
    console.log(`📡 Puerto: ${PORT}`);
    console.log(`🌍 Entorno: ${NODE_ENV}`);
    console.log(`🛡️ IP autorizada: ${process.env.AUTHORIZED_ADMIN_IP}`);
    console.log(`🔒 CORS permitido: ${allowedOrigins.join(', ')}`);
    console.log('✅ Sistema listo para Railway');
});