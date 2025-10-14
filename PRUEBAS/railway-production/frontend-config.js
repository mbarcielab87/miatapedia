// Configuración de API para el frontend de Netlify
// Este archivo debe ser incluido en el frontend antes de cualquier llamada a la API

const API_CONFIG = {
    // URL base de la API de Railway (reemplazar cuando esté desplegado)
    baseURL: 'https://tu-app-railway.up.railway.app', // CAMBIAR POR LA URL REAL DE RAILWAY

    // Endpoints disponibles
    endpoints: {
        // Endpoints públicos (sin autenticación)
        test: '/api/test',
        stats: '/api/stats',
        foros: '/api/foros',
        clubs: '/api/clubs',
        proveedores: '/api/proveedores',
        manuales: '/api/manuales',
        eventos: '/api/eventos',
        paises: '/api/paises',

        // Endpoints de administración (requieren autenticación)
        admin: {
            login: '/admin/api/login',
            logout: '/admin/api/logout',
            panel: '/admin'
        }
    },

    // Headers por defecto
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },

    // Configuración de CORS
    credentials: 'include'
};

// Función helper para construir URLs completas
function buildApiUrl(endpoint) {
    return API_CONFIG.baseURL + endpoint;
}

// Función helper para hacer peticiones GET
async function apiGet(endpoint, params = {}) {
    const url = new URL(buildApiUrl(endpoint));

    // Agregar parámetros de consulta si existen
    Object.keys(params).forEach(key => {
        if (params[key]) {
            url.searchParams.append(key, params[key]);
        }
    });

    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: API_CONFIG.headers,
            credentials: API_CONFIG.credentials
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en petición GET:', error);
        throw error;
    }
}

// Función helper para hacer peticiones POST
async function apiPost(endpoint, data) {
    try {
        const response = await fetch(buildApiUrl(endpoint), {
            method: 'POST',
            headers: API_CONFIG.headers,
            credentials: API_CONFIG.credentials,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en petición POST:', error);
        throw error;
    }
}

// Función helper para hacer peticiones PUT
async function apiPut(endpoint, data) {
    try {
        const response = await fetch(buildApiUrl(endpoint), {
            method: 'PUT',
            headers: API_CONFIG.headers,
            credentials: API_CONFIG.credentials,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en petición PUT:', error);
        throw error;
    }
}

// Función helper para hacer peticiones DELETE
async function apiDelete(endpoint) {
    try {
        const response = await fetch(buildApiUrl(endpoint), {
            method: 'DELETE',
            headers: API_CONFIG.headers,
            credentials: API_CONFIG.credentials
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en petición DELETE:', error);
        throw error;
    }
}

// Exportar configuración para uso global
if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = {
        API_CONFIG,
        buildApiUrl,
        apiGet,
        apiPost,
        apiPut,
        apiDelete
    };
} else {
    // Browser - hacer variables globales
    window.API_CONFIG = API_CONFIG;
    window.buildApiUrl = buildApiUrl;
    window.apiGet = apiGet;
    window.apiPost = apiPost;
    window.apiPut = apiPut;
    window.apiDelete = apiDelete;
}