// API de Miatapedia - Cliente JavaScript para cargar datos dinámicamente
// const API_BASE = 'http://172.22.133.26:3000/api'; // Local development
const API_BASE = window.API_CONFIG ? window.API_CONFIG.baseURL : 'https://miatapedia-production.up.railway.app/api';

// Debug: verificar que el script se está ejecutando
console.log('🚀 api.js cargado correctamente');
console.log('🔗 API_BASE configurado como:', API_BASE);

class MiatapediaAPI {
    constructor() {
        this.cache = new Map();
        this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
    }

    // Función genérica para hacer peticiones con caché
    async fetch(endpoint, useCache = true) {
        const cacheKey = endpoint;

        // Verificar caché
        if (useCache && this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheTimeout) {
                return cached.data;
            }
        }

        try {
            const response = await fetch(`${API_BASE}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Guardar en caché
            if (useCache) {
                this.cache.set(cacheKey, {
                    data: data,
                    timestamp: Date.now()
                });
            }

            return data;
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
            throw error;
        }
    }

    // Métodos específicos para cada endpoint
    async getForos(pais = null) {
        let endpoint = '/foros';
        if (pais) {
            endpoint += `?pais=${encodeURIComponent(pais)}`;
        }
        return this.fetch(endpoint);
    }

    async getProveedores(filtros = {}) {
        let endpoint = '/proveedores?';
        const params = [];

        if (filtros.pais) params.push(`pais=${encodeURIComponent(filtros.pais)}`);
        if (filtros.generacion) params.push(`generacion=${encodeURIComponent(filtros.generacion)}`);
        if (filtros.tipo) params.push(`tipo=${encodeURIComponent(filtros.tipo)}`);

        endpoint += params.join('&');
        return this.fetch(endpoint);
    }

    async getManuales(filtros = {}) {
        let endpoint = '/manuales?';
        const params = [];

        if (filtros.generacion) params.push(`generacion=${encodeURIComponent(filtros.generacion)}`);
        if (filtros.idioma) params.push(`idioma=${encodeURIComponent(filtros.idioma)}`);

        endpoint += params.join('&');
        return this.fetch(endpoint);
    }

    async getEventos(paisRegion = null) {
        let endpoint = '/eventos';
        if (paisRegion) {
            endpoint += `?pais_region=${encodeURIComponent(paisRegion)}`;
        }
        return this.fetch(endpoint);
    }

    async getStats() {
        return this.fetch('/stats');
    }

    async getPaises() {
        return this.fetch('/paises');
    }

    // Método para limpiar caché
    clearCache() {
        this.cache.clear();
    }
}

// Instancia global de la API
const miatapediaAPI = new MiatapediaAPI();

// Funciones de renderizado para cada sección
class MiatapediaRenderer {

    // Renderizar foros por regiones
    static renderForos(foros) {
        // Agrupar foros por país
        const forosPorPais = {};
        foros.forEach(foro => {
            if (!forosPorPais[foro.pais]) {
                forosPorPais[foro.pais] = [];
            }
            forosPorPais[foro.pais].push(foro);
        });

        // Organizar por regiones (simplificado)
        const europa = ['España', 'Reino Unido', 'Alemania', 'Francia', 'Italia', 'Países Bajos'];
        const americas = ['Estados Unidos', 'Canadá', 'México', 'Argentina', 'Brasil'];
        const asiaPacifico = ['Japón', 'Australia', 'Nueva Zelanda', 'Singapur'];

        let html = '';

        // Europa
        const forosEuropa = Object.keys(forosPorPais).filter(pais => europa.includes(pais));
        if (forosEuropa.length > 0) {
            html += `
                <div class="mb-8 sm:mb-10">
                    <h3 class="text-lg sm:text-xl font-semibold text-miata-gray mb-4 flex items-center">
                        <i class="fas fa-flag text-blue-600 mr-2"></i>Europa
                    </h3>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            forosEuropa.forEach(pais => {
                const paisForos = forosPorPais[pais];
                html += `
                    <div class="bg-gray-50 p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-blue-600">
                        <div class="flex items-center mb-3">
                            <h4 class="text-base sm:text-lg font-semibold text-miata-gray">${pais}</h4>
                        </div>
                        <div class="space-y-3">
                `;

                paisForos.forEach(foro => {
                    html += `
                        <div>
                            <a href="${foro.url}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium text-sm">${foro.nombre}</a>
                            ${foro.descripcion ? `<p class="text-xs text-gray-600 mt-1">${foro.descripcion}</p>` : ''}
                        </div>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        }

        // Américas
        const forosAmericas = Object.keys(forosPorPais).filter(pais => americas.includes(pais));
        if (forosAmericas.length > 0) {
            html += `
                <div class="mb-8 sm:mb-10">
                    <h3 class="text-lg sm:text-xl font-semibold text-miata-gray mb-4 flex items-center">
                        <i class="fas fa-flag text-green-600 mr-2"></i>Américas
                    </h3>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            forosAmericas.forEach(pais => {
                const paisForos = forosPorPais[pais];
                html += `
                    <div class="bg-gray-50 p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-green-600">
                        <div class="flex items-center mb-3">
                            <h4 class="text-base sm:text-lg font-semibold text-miata-gray">${pais}</h4>
                        </div>
                        <div class="space-y-3">
                `;

                paisForos.forEach(foro => {
                    html += `
                        <div>
                            <a href="${foro.url}" target="_blank" class="text-green-600 hover:text-green-800 font-medium text-sm">${foro.nombre}</a>
                            ${foro.descripcion ? `<p class="text-xs text-gray-600 mt-1">${foro.descripcion}</p>` : ''}
                        </div>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        }

        // Asia-Pacífico
        const forosAsia = Object.keys(forosPorPais).filter(pais => asiaPacifico.includes(pais));
        if (forosAsia.length > 0) {
            html += `
                <div class="mb-8 sm:mb-10">
                    <h3 class="text-lg sm:text-xl font-semibold text-miata-gray mb-4 flex items-center">
                        <i class="fas fa-flag text-red-600 mr-2"></i>Asia-Pacífico
                    </h3>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            forosAsia.forEach(pais => {
                const paisForos = forosPorPais[pais];
                html += `
                    <div class="bg-gray-50 p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-red-600">
                        <div class="flex items-center mb-3">
                            <h4 class="text-base sm:text-lg font-semibold text-miata-gray">${pais}</h4>
                        </div>
                        <div class="space-y-3">
                `;

                paisForos.forEach(foro => {
                    html += `
                        <div>
                            <a href="${foro.url}" target="_blank" class="text-red-600 hover:text-red-800 font-medium text-sm">${foro.nombre}</a>
                            ${foro.descripcion ? `<p class="text-xs text-gray-600 mt-1">${foro.descripcion}</p>` : ''}
                        </div>
                    `;
                });

                html += `
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        }

        return html;
    }

    // Renderizar proveedores por tipo
    static renderProveedores(proveedores) {
        const tiposMap = {
            'OEM': { titulo: 'Repuestos OEM Nuevos', icon: 'star', color: 'red' },
            'nuevo': { titulo: 'Tiendas Mixtas', icon: 'tools', color: 'blue' },
            'segunda mano': { titulo: 'Repuestos Usados', icon: 'recycle', color: 'green' }
        };

        let html = '';

        Object.keys(tiposMap).forEach(tipo => {
            const proveedoresTipo = proveedores.filter(p => p.tipo === tipo);
            if (proveedoresTipo.length === 0) return;

            const config = tiposMap[tipo];
            html += `
                <div class="mb-8 sm:mb-10">
                    <h4 class="text-lg sm:text-xl font-semibold text-miata-gray mb-4 flex items-center">
                        <i class="fas fa-${config.icon} text-${config.color}-600 mr-2"></i>${config.titulo}
                    </h4>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            proveedoresTipo.forEach(proveedor => {
                const generaciones = proveedor.generacion.split(',');
                html += `
                    <div class="bg-white p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-${config.color}-500">
                        <div class="flex items-center justify-between mb-3">
                            <h5 class="font-semibold text-miata-gray">${proveedor.nombre}</h5>
                            <span class="text-xs bg-${config.color}-100 text-${config.color}-800 px-2 py-1 rounded-full">${proveedor.pais}</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-3">${proveedor.descripcion || ''}</p>
                        <div class="text-xs text-gray-500 mb-3">
                            ${generaciones.map(gen => `<span class="inline-block bg-gray-100 px-2 py-1 rounded mr-1 mb-1">${gen.trim()}</span>`).join('')}
                        </div>
                        <a href="${proveedor.url}" target="_blank" class="bg-miata-red text-white px-3 py-2 rounded text-xs hover:bg-red-700 transition-colors">
                            Visitar Tienda <i class="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        return html;
    }

    // Renderizar manuales por generación
    static renderManuales(manuales) {
        const generaciones = ['NA', 'NB', 'NC', 'ND'];
        let html = '';

        generaciones.forEach(gen => {
            const manualesGen = manuales.filter(m => m.generacion === gen);
            if (manualesGen.length === 0) return;

            html += `
                <div class="mb-8 sm:mb-10">
                    <h4 class="text-lg sm:text-xl font-semibold text-miata-gray mb-4 flex items-center">
                        <i class="fas fa-book text-miata-red mr-2"></i>Generación ${gen}
                    </h4>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            manualesGen.forEach(manual => {
                html += `
                    <div class="bg-white p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-miata-red">
                        <h5 class="font-semibold text-miata-gray mb-2">${manual.nombre}</h5>
                        <p class="text-sm text-gray-600 mb-3">${manual.descripcion || ''}</p>
                        <div class="flex justify-between items-center text-xs text-gray-500 mb-3">
                            <span>Idioma: ${manual.idioma}</span>
                            <span>Gen: ${manual.generacion}</span>
                        </div>
                        <a href="${manual.url}" target="_blank" class="bg-miata-red text-white px-3 py-2 rounded text-xs hover:bg-red-700 transition-colors">
                            Descargar <i class="fas fa-download ml-1"></i>
                        </a>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        return html;
    }

    // Renderizar eventos por región
    static renderEventos(eventos) {
        const eventosPorRegion = {};
        eventos.forEach(evento => {
            if (!eventosPorRegion[evento.pais_region]) {
                eventosPorRegion[evento.pais_region] = [];
            }
            eventosPorRegion[evento.pais_region].push(evento);
        });

        let html = '';

        Object.keys(eventosPorRegion).forEach((region, index) => {
            const eventosRegion = eventosPorRegion[region];
            const colors = ['blue', 'green', 'red', 'purple', 'orange'];
            const color = colors[index % colors.length];

            html += `
                <div class="mb-10 sm:mb-12">
                    <h3 class="text-xl sm:text-2xl font-bold text-miata-gray mb-6 flex items-center">
                        <span class="mr-3">🌍</span>${region}
                        <span class="ml-3 text-sm font-normal text-gray-500">(${eventosRegion.length} eventos)</span>
                    </h3>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            `;

            eventosRegion.forEach(evento => {
                html += `
                    <div class="bg-white p-4 sm:p-5 rounded-lg shadow-lg border-l-4 border-${color}-500">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="font-semibold text-miata-gray">${evento.nombre}</h4>
                            <span class="text-xs bg-${color}-100 text-${color}-800 px-2 py-1 rounded-full">${region}</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-3">${evento.descripcion || ''}</p>
                        ${evento.fecha ? `<p class="text-xs text-gray-500 mb-3">📅 ${evento.fecha}</p>` : ''}
                        <a href="${evento.url}" target="_blank" class="bg-miata-red text-white px-3 py-2 rounded text-xs hover:bg-red-700 transition-colors inline-block">
                            Ver Evento <i class="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        return html;
    }
}

// Funciones de carga para cada sección
async function cargarClubsContenido() {
    console.log('🚀 Iniciando carga de clubs...');
    try {
        const foros = await miatapediaAPI.getForos();
        console.log('📦 Clubs obtenidos:', foros.length);

        const container = document.getElementById('clubs-content');
        const loadingElement = document.getElementById('clubs-loading');

        if (container) {
            container.innerHTML = MiatapediaRenderer.renderForos(foros);
            console.log('✅ Clubs renderizados');
        }

        // Ocultar indicador de carga
        if (loadingElement) {
            loadingElement.style.display = 'none';
            console.log('✅ Indicador de carga ocultado');
        }
    } catch (error) {
        console.error('❌ Error cargando clubs:', error);
        const loadingElement = document.getElementById('clubs-loading');
        if (loadingElement) {
            loadingElement.innerHTML = '<p class="text-red-600">Error cargando clubs</p>';
        }
    }
}

async function cargarProveedoresContenido() {
    console.log('🚀 Iniciando carga de proveedores...');
    try {
        const proveedores = await miatapediaAPI.getProveedores();
        console.log('📦 Proveedores obtenidos:', proveedores.length);

        const container = document.getElementById('proveedores-content');
        const loadingElement = document.getElementById('proveedores-loading');

        if (container) {
            container.innerHTML = MiatapediaRenderer.renderProveedores(proveedores);
            console.log('✅ Proveedores renderizados');
        }

        if (loadingElement) {
            loadingElement.style.display = 'none';
            console.log('✅ Indicador de carga de proveedores ocultado');
        }
    } catch (error) {
        console.error('❌ Error cargando proveedores:', error);
        const loadingElement = document.getElementById('proveedores-loading');
        if (loadingElement) {
            loadingElement.innerHTML = '<p class="text-red-600">Error cargando proveedores</p>';
        }
    }
}

async function cargarManualesContenido() {
    console.log('🚀 Iniciando carga de manuales...');
    try {
        const manuales = await miatapediaAPI.getManuales();
        console.log('📦 Manuales obtenidos:', manuales.length);

        const container = document.getElementById('manuales-content');
        const loadingElement = document.getElementById('manuales-loading');

        if (container) {
            container.innerHTML = MiatapediaRenderer.renderManuales(manuales);
            console.log('✅ Manuales renderizados');
        }

        if (loadingElement) {
            loadingElement.style.display = 'none';
            console.log('✅ Indicador de carga de manuales ocultado');
        }
    } catch (error) {
        console.error('❌ Error cargando manuales:', error);
        const loadingElement = document.getElementById('manuales-loading');
        if (loadingElement) {
            loadingElement.innerHTML = '<p class="text-red-600">Error cargando manuales</p>';
        }
    }
}

async function cargarEventosContenido() {
    console.log('🚀 Iniciando carga de eventos...');
    try {
        const eventos = await miatapediaAPI.getEventos();
        console.log('📦 Eventos obtenidos:', eventos.length);

        const container = document.getElementById('eventos-content');
        const loadingElement = document.getElementById('eventos-loading');

        if (container) {
            container.innerHTML = MiatapediaRenderer.renderEventos(eventos);
            console.log('✅ Eventos renderizados');
        }

        if (loadingElement) {
            loadingElement.style.display = 'none';
            console.log('✅ Indicador de carga de eventos ocultado');
        }
    } catch (error) {
        console.error('❌ Error cargando eventos:', error);
        const loadingElement = document.getElementById('eventos-loading');
        if (loadingElement) {
            loadingElement.innerHTML = '<p class="text-red-600">Error cargando eventos</p>';
        }
    }
}

async function cargarEstadisticas() {
    try {
        const stats = await miatapediaAPI.getStats();

        // Actualizar contadores en la página
        const elementos = {
            'foros-count': stats.foros,
            'proveedores-count': stats.proveedores,
            'manuales-count': stats.manuales,
            'eventos-count': stats.eventos
        };

        Object.keys(elementos).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elementos[id];
            }
        });
    } catch (error) {
        console.error('Error cargando estadísticas:', error);
    }
}

// Función de inicialización principal
async function inicializarMiatapedia() {
    console.log('🚀 Inicializando Miatapedia con datos de la API...');

    try {
        // Cargar estadísticas primero
        console.log('📊 Cargando estadísticas...');
        await cargarEstadisticas();

        // Cargar contenido de cada sección de forma individual para mejor debug
        console.log('📦 Cargando todas las secciones...');
        await cargarClubsContenido();
        await cargarProveedoresContenido();
        await cargarManualesContenido();
        await cargarEventosContenido();

        console.log('✅ Miatapedia inicializada correctamente');
    } catch (error) {
        console.error('❌ Error inicializando Miatapedia:', error);

        // Mostrar mensaje de error al usuario
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded';
        errorDiv.innerHTML = `
            <strong>Error:</strong> No se pudo conectar con la API.
            ¿Está el servidor ejecutándose en localhost:3000?
        `;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            document.body.removeChild(errorDiv);
        }, 5000);
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM cargado, iniciando Miatapedia...');
    inicializarMiatapedia();
});

console.log('🏁 api.js completamente cargado');