const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Configuración de autenticación
const AUTH_CONFIG = {
    username: process.env.ADMIN_USERNAME || 'admin',
    // Password hash (para producción, usar bcrypt.hashSync('password', 10))
    passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'Miata2024!Secure', 10),
    jwtSecret: process.env.JWT_SECRET || 'MiataSecretKey2024!VerySecureRandomString',
    sessionSecret: process.env.SESSION_SECRET || 'MiataSessionKey2024!AnotherSecureString'
};

// Middleware para verificar autenticación JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({
            error: 'Token de acceso requerido',
            message: 'Debes estar autenticado para acceder a este recurso'
        });
    }

    jwt.verify(token, AUTH_CONFIG.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: 'Token inválido o expirado',
                message: 'Tu sesión ha expirado, por favor inicia sesión nuevamente'
            });
        }
        req.user = user;
        next();
    });
}

// Middleware para verificar que es admin
function requireAdmin(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            error: 'Acceso denegado',
            message: 'Necesitas permisos de administrador para esta acción'
        });
    }
    next();
}

// Función para autenticar usuario
async function authenticateUser(username, password) {
    if (username !== AUTH_CONFIG.username) {
        return { success: false, message: 'Usuario no encontrado' };
    }

    const isPasswordValid = await bcrypt.compare(password, AUTH_CONFIG.passwordHash);
    if (!isPasswordValid) {
        return { success: false, message: 'Contraseña incorrecta' };
    }

    // Generar JWT token
    const token = jwt.sign(
        {
            username: username,
            role: 'admin',
            loginTime: new Date().toISOString()
        },
        AUTH_CONFIG.jwtSecret,
        { expiresIn: '24h' }
    );

    return {
        success: true,
        token: token,
        user: {
            username: username,
            role: 'admin'
        }
    };
}

// Middleware para logs de seguridad
function securityLogger(req, res, next) {
    const timestamp = new Date().toISOString();
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Log de intentos de acceso a rutas protegidas
    if (req.path.includes('/admin') || req.method !== 'GET') {
        console.log(`[SECURITY] ${timestamp} - ${req.method} ${req.path} - IP: ${ip} - UA: ${userAgent}`);
    }

    next();
}

// Middleware para verificar sesión del admin panel
function checkAdminSession(req, res, next) {
    // Para el panel de admin HTML, verificar sesión
    if (req.session && req.session.isAdmin) {
        next();
    } else {
        // Redirigir a login si no está autenticado
        res.redirect('/admin/login');
    }
}

module.exports = {
    authenticateToken,
    requireAdmin,
    authenticateUser,
    securityLogger,
    checkAdminSession,
    AUTH_CONFIG
};