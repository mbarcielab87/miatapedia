const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const { db, initDatabase } = require('./database');
const {
    authenticateToken,
    requireAdmin,
    authenticateUser,
    securityLogger,
    checkAdminSession,
    AUTH_CONFIG
} = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

// ===============================
// MIDDLEWARES DE SEGURIDAD
// ===============================

// Helmet para headers de seguridad
app.use(helmet({
    contentSecurityPolicy: false, // Deshabilitado para permitir CDNs
    crossOriginEmbedderPolicy: false
}));

// Rate limiting global
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutos
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // 100 requests por ventana
    message: {
        error: 'Demasiadas peticiones',
        message: 'Has excedido el límite de peticiones. Inténtalo más tarde.'
    },
    standardHeaders: true,
    legacyHeaders: false
});
app.use(limiter);

// Rate limiting más estricto para rutas de autenticación
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Solo 5 intentos de login por IP
    message: {
        error: 'Demasiados intentos de login',
        message: 'Has excedido el límite de intentos de autenticación. Inténtalo en 15 minutos.'
    }
});

// Configuración de sesiones
app.use(session({
    secret: AUTH_CONFIG.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true en producción con HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    }
}));

// Middlewares básicos
app.use(cors({
    origin: function (origin, callback) {
        // Permitir requests sin origin (apps móviles, herramientas)
        if (!origin) return callback(null, true);

        // Lista de dominios permitidos (ajustar según necesidades)
        const allowedOrigins = [
            'http://localhost:8080',
            'http://172.22.133.26:8080',
            'http://localhost:3000',
            'http://172.22.133.26:3000'
        ];

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Logger de seguridad
app.use(securityLogger);

// Inicializar base de datos
initDatabase().catch(console.error);

// ===============================
// RUTAS DE AUTENTICACIÓN
// ===============================

// Página de login
app.get('/admin/login', (req, res) => {
    // Si ya está autenticado, redirigir al panel
    if (req.session.isAdmin) {
        return res.redirect('/admin');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
});

// API de login
app.post('/admin/api/login', authLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                error: 'Datos incompletos',
                message: 'Usuario y contraseña son requeridos'
            });
        }

        console.log(`[AUTH] Intento de login desde IP: ${req.ip} - Usuario: ${username}`);

        const result = await authenticateUser(username, password);

        if (result.success) {
            // Configurar sesión
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
            console.log(`[AUTH] Login fallido - Usuario: ${username} - IP: ${req.ip} - Razón: ${result.message}`);

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

        console.log(`[AUTH] Logout exitoso - Usuario: ${username} - IP: ${req.ip}`);
        res.json({ message: 'Sesión cerrada exitosamente' });
    });
});

// ===============================
// RUTAS PÚBLICAS (SOLO LECTURA)
// ===============================

// Endpoint de prueba
app.get('/api/test', (req, res) => {
    res.json({
        message: 'API funcionando correctamente',
        timestamp: new Date().toISOString(),
        secure: true
    });
});

// Estadísticas (público)
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
            eventos: results[3].eventos
        });
    }).catch(err => {
        console.error('Error obteniendo estadísticas:', err);
        res.status(500).json({ error: 'Error obteniendo estadísticas' });
    });
});

// GET endpoints (públicos, solo lectura)
const publicEndpoints = [
    { route: '/api/foros', table: 'foros', filters: ['pais'] },
    { route: '/api/clubs', table: 'foros', filters: ['pais'] }, // Alias
    { route: '/api/proveedores', table: 'proveedores', filters: ['pais', 'generacion', 'tipo'] },
    { route: '/api/manuales', table: 'manuales', filters: ['generacion', 'idioma'] },
    { route: '/api/eventos', table: 'eventos', filters: ['pais_region'] },
    { route: '/api/paises', query: 'SELECT DISTINCT pais FROM foros ORDER BY pais' }
];

publicEndpoints.forEach(endpoint => {
    app.get(endpoint.route, (req, res) => {
        if (endpoint.query) {
            // Query personalizada
            db.all(endpoint.query, (err, rows) => {
                if (err) {
                    console.error(`Error en ${endpoint.route}:`, err);
                    return res.status(500).json({ error: 'Error interno del servidor' });
                }
                res.json(rows.map(row => row.pais || row));
            });
        } else {
            // Query con filtros
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
// RUTAS PROTEGIDAS (ADMIN)
// ===============================

// Panel de administración
app.get('/admin', checkAdminSession, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API protegida para obtener datos (con autenticación JWT para APIs externas)
app.get('/admin/api/:table', authenticateToken, requireAdmin, (req, res) => {
    const { table } = req.params;
    const allowedTables = ['foros', 'proveedores', 'manuales', 'eventos'];

    if (!allowedTables.includes(table)) {
        return res.status(400).json({ error: 'Tabla no válida' });
    }

    db.all(`SELECT * FROM ${table}`, (err, rows) => {
        if (err) {
            console.error(`Error obteniendo ${table}:`, err);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
        res.json(rows);
    });
});

// POST protegido (crear)
const protectedTables = ['foros', 'proveedores', 'manuales', 'eventos'];
protectedTables.forEach(table => {
    // POST (crear) - requiere autenticación
    app.post(`/api/${table}`, authenticateToken, requireAdmin, (req, res) => {
        const data = req.body;

        // Validación básica
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ error: 'Datos requeridos' });
        }

        // Construir query dinámicamente
        const fields = Object.keys(data).filter(key => key !== 'id');
        const placeholders = fields.map(() => '?').join(', ');
        const values = fields.map(field => data[field]);

        const query = `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${placeholders})`;

        db.run(query, values, function(err) {
            if (err) {
                console.error(`Error creando en ${table}:`, err);
                return res.status(500).json({ error: 'Error creando registro' });
            }

            console.log(`[ADMIN] Nuevo registro creado en ${table} - ID: ${this.lastID} - Usuario: ${req.user.username}`);
            res.json({
                id: this.lastID,
                message: 'Registro creado exitosamente',
                ...data
            });
        });
    });

    // PUT (actualizar) - requiere autenticación
    app.put(`/api/${table}/:id`, authenticateToken, requireAdmin, (req, res) => {
        const { id } = req.params;
        const data = req.body;

        // Remover id de los datos
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

    // DELETE - requiere autenticación
    app.delete(`/api/${table}/:id`, authenticateToken, requireAdmin, (req, res) => {
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

    // Alias para clubs
    if (table === 'foros') {
        app.post('/api/clubs', authenticateToken, requireAdmin, (req, res) => {
            req.url = '/api/foros';
            app._router.handle(req, res);
        });
        app.put('/api/clubs/:id', authenticateToken, requireAdmin, (req, res) => {
            req.url = `/api/foros/${req.params.id}`;
            app._router.handle(req, res);
        });
        app.delete('/api/clubs/:id', authenticateToken, requireAdmin, (req, res) => {
            req.url = `/api/foros/${req.params.id}`;
            app._router.handle(req, res);
        });
    }
});

// ===============================
// MANEJO DE ERRORES
// ===============================

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        message: 'La ruta solicitada no existe'
    });
});

// Manejo global de errores
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
    console.log('🔐 Servidor SEGURO ejecutándose en:');
    console.log(`- Local: http://localhost:${PORT}`);
    console.log(`- Red: http://172.22.133.26:${PORT}`);
    console.log('\n🛡️ ENDPOINTS SEGUROS:');
    console.log('- Admin Login: http://172.22.133.26:3000/admin/login');
    console.log('- Admin Panel: http://172.22.133.26:3000/admin (requiere auth)');
    console.log('\n📖 ENDPOINTS PÚBLICOS (solo lectura):');
    console.log('- GET /api/test');
    console.log('- GET /api/stats');
    console.log('- GET /api/foros, /api/clubs, /api/proveedores, /api/manuales, /api/eventos');
    console.log('\n🔒 ENDPOINTS PROTEGIDOS (requieren JWT):');
    console.log('- POST/PUT/DELETE /api/foros, /api/clubs, /api/proveedores, /api/manuales, /api/eventos');
    console.log('\n🔑 CREDENCIALES DEFAULT:');
    console.log(`- Usuario: ${AUTH_CONFIG.username}`);
    console.log('- Contraseña: configurada en .env');
});