const API_BASE = 'http://172.22.133.26:3000/api';

// Estado de la aplicación
let todosLosPaises = [];
let todasLasRegiones = [];

// Función para mostrar estado
function mostrarEstado(mensaje, tipo = 'loading') {
    const statusElement = document.getElementById('status');
    statusElement.textContent = mensaje;
    statusElement.className = `status ${tipo}`;
}

// Función para hacer peticiones fetch con manejo de errores
async function fetchAPI(endpoint) {
    try {
        const fullUrl = `${API_BASE}${endpoint}`;
        console.log('Haciendo fetch a:', fullUrl);

        const response = await fetch(fullUrl);
        console.log('Respuesta recibida:', response.status, response.statusText);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data);
        return data;
    } catch (error) {
        console.error('Error en fetch:', error);
        mostrarEstado(`Error: ${error.message}`, 'error');
        throw error;
    }
}

// Cargar estadísticas
async function cargarEstadisticas() {
    try {
        const stats = await fetchAPI('/stats');
        const statsContainer = document.getElementById('stats');

        statsContainer.innerHTML = `
            <div class="stat-card">
                <div class="stat-number">${stats.foros}</div>
                <div class="stat-label">Foros</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.proveedores}</div>
                <div class="stat-label">Proveedores</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.manuales}</div>
                <div class="stat-label">Manuales</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${stats.eventos}</div>
                <div class="stat-label">Eventos</div>
            </div>
        `;
    } catch (error) {
        document.getElementById('stats').innerHTML = '<p>Error cargando estadísticas</p>';
    }
}

// Cargar países para el filtro
async function cargarPaises() {
    try {
        const paises = await fetchAPI('/paises');
        todosLosPaises = paises;

        const selectPais = document.getElementById('filtro-pais');
        selectPais.innerHTML = '<option value="">Todos los países</option>';

        paises.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais;
            option.textContent = pais;
            selectPais.appendChild(option);
        });
    } catch (error) {
        console.error('Error cargando países:', error);
    }
}

// Cargar foros
async function cargarForos() {
    try {
        mostrarEstado('Cargando foros...', 'loading');

        const paisSeleccionado = document.getElementById('filtro-pais').value;
        let endpoint = '/foros';

        if (paisSeleccionado) {
            endpoint += `?pais=${encodeURIComponent(paisSeleccionado)}`;
        }

        const foros = await fetchAPI(endpoint);
        const tbody = document.getElementById('foros-body');

        if (foros.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4">No se encontraron foros</td></tr>';
        } else {
            tbody.innerHTML = foros.map(foro => `
                <tr>
                    <td>${foro.nombre}</td>
                    <td>${foro.pais}</td>
                    <td>${foro.descripcion || '-'}</td>
                    <td><a href="${foro.url}" target="_blank">Visitar</a></td>
                </tr>
            `).join('');
        }

        mostrarEstado(`${foros.length} foros cargados`, 'success');
    } catch (error) {
        document.getElementById('foros-body').innerHTML = '<tr><td colspan="4">Error cargando foros</td></tr>';
    }
}

// Cargar eventos
async function cargarEventos() {
    try {
        mostrarEstado('Cargando eventos...', 'loading');

        const regionSeleccionada = document.getElementById('filtro-region').value;
        let endpoint = '/eventos';

        if (regionSeleccionada) {
            endpoint += `?pais_region=${encodeURIComponent(regionSeleccionada)}`;
        }

        const eventos = await fetchAPI(endpoint);
        const tbody = document.getElementById('eventos-body');

        // Actualizar filtro de regiones
        const regiones = [...new Set(eventos.map(e => e.pais_region))];
        todasLasRegiones = regiones;

        const selectRegion = document.getElementById('filtro-region');
        if (selectRegion.children.length === 1) { // Solo tiene "Todas las regiones"
            regiones.forEach(region => {
                const option = document.createElement('option');
                option.value = region;
                option.textContent = region;
                selectRegion.appendChild(option);
            });
        }

        if (eventos.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">No se encontraron eventos</td></tr>';
        } else {
            tbody.innerHTML = eventos.map(evento => `
                <tr>
                    <td>${evento.nombre}</td>
                    <td>${evento.pais_region}</td>
                    <td>${evento.fecha || '-'}</td>
                    <td>${evento.descripcion || '-'}</td>
                    <td><a href="${evento.url}" target="_blank">Ver</a></td>
                </tr>
            `).join('');
        }

        mostrarEstado(`${eventos.length} eventos cargados`, 'success');
    } catch (error) {
        document.getElementById('eventos-body').innerHTML = '<tr><td colspan="5">Error cargando eventos</td></tr>';
    }
}

// Cargar proveedores
async function cargarProveedores() {
    try {
        mostrarEstado('Cargando proveedores...', 'loading');

        const tipo = document.getElementById('filtro-tipo').value;
        const generacion = document.getElementById('filtro-generacion').value;

        let endpoint = '/proveedores?';
        const params = [];

        if (tipo) params.push(`tipo=${encodeURIComponent(tipo)}`);
        if (generacion) params.push(`generacion=${encodeURIComponent(generacion)}`);

        endpoint += params.join('&');

        const proveedores = await fetchAPI(endpoint);
        const tbody = document.getElementById('proveedores-body');

        if (proveedores.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">No se encontraron proveedores</td></tr>';
        } else {
            tbody.innerHTML = proveedores.map(proveedor => `
                <tr>
                    <td>${proveedor.nombre}</td>
                    <td>${proveedor.pais}</td>
                    <td>${proveedor.tipo}</td>
                    <td>${proveedor.generacion}</td>
                    <td>${proveedor.descripcion || '-'}</td>
                    <td><a href="${proveedor.url}" target="_blank">Visitar</a></td>
                </tr>
            `).join('');
        }

        mostrarEstado(`${proveedores.length} proveedores cargados`, 'success');
    } catch (error) {
        document.getElementById('proveedores-body').innerHTML = '<tr><td colspan="6">Error cargando proveedores</td></tr>';
    }
}

// Cargar manuales
async function cargarManuales() {
    try {
        mostrarEstado('Cargando manuales...', 'loading');

        const generacion = document.getElementById('filtro-manual-gen').value;
        const idioma = document.getElementById('filtro-idioma').value;

        let endpoint = '/manuales?';
        const params = [];

        if (generacion) params.push(`generacion=${encodeURIComponent(generacion)}`);
        if (idioma) params.push(`idioma=${encodeURIComponent(idioma)}`);

        endpoint += params.join('&');

        const manuales = await fetchAPI(endpoint);
        const tbody = document.getElementById('manuales-body');

        if (manuales.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5">No se encontraron manuales</td></tr>';
        } else {
            tbody.innerHTML = manuales.map(manual => `
                <tr>
                    <td>${manual.nombre}</td>
                    <td>${manual.generacion}</td>
                    <td>${manual.idioma}</td>
                    <td>${manual.descripcion || '-'}</td>
                    <td><a href="${manual.url}" target="_blank">Descargar</a></td>
                </tr>
            `).join('');
        }

        mostrarEstado(`${manuales.length} manuales cargados`, 'success');
    } catch (error) {
        document.getElementById('manuales-body').innerHTML = '<tr><td colspan="5">Error cargando manuales</td></tr>';
    }
}

// Función para probar la conexión con la API
async function probarConexion() {
    try {
        console.log('Probando conexión con:', `${API_BASE}/test`);
        const response = await fetchAPI('/test');
        mostrarEstado('✓ Conectado con la API', 'success');
        console.log('API Response:', response);
        return true;
    } catch (error) {
        console.error('Error de conexión:', error);
        mostrarEstado('✗ Error conectando con la API. ¿Está el servidor ejecutándose?', 'error');
        return false;
    }
}

// Función de inicialización
async function inicializar() {
    console.log('🚀 Iniciando aplicación...');
    mostrarEstado('Inicializando aplicación...', 'loading');

    try {
        // Probar conexión primero
        console.log('🔗 Probando conexión...');
        const conexionOk = await probarConexion();

        if (!conexionOk) {
            console.log('⚠️ Conexión falló pero continuando...');
        }

        // Cargar datos uno por uno con manejo individual de errores
        console.log('📊 Cargando estadísticas...');
        try {
            await cargarEstadisticas();
            console.log('✅ Estadísticas cargadas');
        } catch (error) {
            console.error('❌ Error cargando estadísticas:', error);
        }

        console.log('🌍 Cargando países...');
        try {
            await cargarPaises();
            console.log('✅ Países cargados');
        } catch (error) {
            console.error('❌ Error cargando países:', error);
        }

        console.log('💬 Cargando foros...');
        try {
            await cargarForos();
            console.log('✅ Foros cargados');
        } catch (error) {
            console.error('❌ Error cargando foros:', error);
        }

        console.log('📅 Cargando eventos...');
        try {
            await cargarEventos();
            console.log('✅ Eventos cargados');
        } catch (error) {
            console.error('❌ Error cargando eventos:', error);
        }

        console.log('🛒 Cargando proveedores...');
        try {
            await cargarProveedores();
            console.log('✅ Proveedores cargados');
        } catch (error) {
            console.error('❌ Error cargando proveedores:', error);
        }

        console.log('📖 Cargando manuales...');
        try {
            await cargarManuales();
            console.log('✅ Manuales cargados');
        } catch (error) {
            console.error('❌ Error cargando manuales:', error);
        }

        mostrarEstado('✓ Aplicación lista', 'success');
        console.log('🏁 Inicialización completada');

    } catch (error) {
        console.error('💥 Error crítico en inicialización:', error);
        mostrarEstado('✗ Error crítico en la aplicación', 'error');
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM cargado, iniciando aplicación...');
    inicializar();
});

// Debug: verificar que el script se está ejecutando
console.log('🚀 app.js cargado correctamente');
console.log('🔗 API_BASE configurado como:', API_BASE);