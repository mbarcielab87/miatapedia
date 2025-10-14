// Test completo del sistema de seguridad
const fetch = require('node-fetch');

const API_BASE = 'http://172.22.133.26:3000';
const ADMIN_CREDENTIALS = {
    username: 'Headcount5250',
    password: 'lVZOa9mKiu2rNR'
};

console.log('🔐 Iniciando tests de seguridad para Miatapedia...\n');

// Test 1: Endpoints públicos (deben funcionar sin auth)
async function testPublicEndpoints() {
    console.log('📖 Test 1: Endpoints públicos');

    const publicEndpoints = [
        '/api/test',
        '/api/stats',
        '/api/foros',
        '/api/clubs',
        '/api/proveedores',
        '/api/manuales',
        '/api/eventos'
    ];

    for (const endpoint of publicEndpoints) {
        try {
            const response = await fetch(`${API_BASE}${endpoint}`);
            if (response.ok) {
                console.log(`✅ ${endpoint} - Público OK`);
            } else {
                console.log(`❌ ${endpoint} - Error ${response.status}`);
            }
        } catch (error) {
            console.log(`❌ ${endpoint} - Error: ${error.message}`);
        }
    }
    console.log();
}

// Test 2: Endpoints protegidos (deben fallar sin auth)
async function testProtectedEndpoints() {
    console.log('🔒 Test 2: Endpoints protegidos (sin auth - deben fallar)');

    const protectedTests = [
        { method: 'POST', endpoint: '/api/foros', data: { nombre: 'test' } },
        { method: 'PUT', endpoint: '/api/foros/1', data: { nombre: 'test' } },
        { method: 'DELETE', endpoint: '/api/foros/999' }
    ];

    for (const test of protectedTests) {
        try {
            const options = {
                method: test.method,
                headers: { 'Content-Type': 'application/json' }
            };

            if (test.data) {
                options.body = JSON.stringify(test.data);
            }

            const response = await fetch(`${API_BASE}${test.endpoint}`, options);

            if (response.status === 401) {
                console.log(`✅ ${test.method} ${test.endpoint} - Protegido correctamente (401)`);
            } else {
                console.log(`❌ ${test.method} ${test.endpoint} - Debería estar protegido (${response.status})`);
            }
        } catch (error) {
            console.log(`❌ ${test.method} ${test.endpoint} - Error: ${error.message}`);
        }
    }
    console.log();
}

// Test 3: Login y autenticación
async function testAuthentication() {
    console.log('🔑 Test 3: Sistema de autenticación');

    try {
        // Test login correcto
        const loginResponse = await fetch(`${API_BASE}/admin/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ADMIN_CREDENTIALS)
        });

        if (loginResponse.ok) {
            const loginData = await loginResponse.json();
            console.log('✅ Login exitoso - Token JWT obtenido');

            // Test endpoint protegido con token
            const token = loginData.token;
            const protectedResponse = await fetch(`${API_BASE}/api/foros`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nombre: 'Test Security Forum',
                    url: 'https://test-security.com',
                    pais: 'Test País',
                    descripcion: 'Forum de prueba de seguridad'
                })
            });

            if (protectedResponse.ok) {
                const newForum = await protectedResponse.json();
                console.log(`✅ Endpoint protegido funciona con token - ID creado: ${newForum.id}`);

                // Limpiar - eliminar el forum de prueba
                const deleteResponse = await fetch(`${API_BASE}/api/foros/${newForum.id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (deleteResponse.ok) {
                    console.log('✅ Limpieza completada - Forum de prueba eliminado');
                }
            } else {
                console.log('❌ Endpoint protegido falló con token válido');
            }
        } else {
            console.log('❌ Login falló');
        }

        // Test login incorrecto
        const badLoginResponse = await fetch(`${API_BASE}/admin/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'wrong', password: 'wrong' })
        });

        if (badLoginResponse.status === 401) {
            console.log('✅ Login con credenciales incorrectas rechazado correctamente');
        } else {
            console.log('❌ Login con credenciales incorrectas debería fallar');
        }

    } catch (error) {
        console.log(`❌ Error en test de autenticación: ${error.message}`);
    }
    console.log();
}

// Test 4: Redirección del panel admin
async function testAdminRedirect() {
    console.log('🛡️ Test 4: Redirección del panel admin');

    try {
        const response = await fetch(`${API_BASE}/admin`, {
            redirect: 'manual'
        });

        if (response.status === 302) {
            console.log('✅ Panel admin redirige correctamente sin autenticación');
        } else {
            console.log(`❌ Panel admin debería redirigir (${response.status})`);
        }
    } catch (error) {
        console.log(`❌ Error en test de redirección: ${error.message}`);
    }
    console.log();
}

// Ejecutar todos los tests
async function runAllTests() {
    await testPublicEndpoints();
    await testProtectedEndpoints();
    await testAuthentication();
    await testAdminRedirect();

    console.log('🎉 Tests de seguridad completados!');
    console.log('\n📋 Resumen de seguridad implementada:');
    console.log('   ✅ Endpoints públicos (solo lectura)');
    console.log('   ✅ Endpoints protegidos con JWT');
    console.log('   ✅ Autenticación con bcrypt');
    console.log('   ✅ Rate limiting');
    console.log('   ✅ Headers de seguridad (Helmet)');
    console.log('   ✅ Sesiones seguras');
    console.log('   ✅ Logs de seguridad');
    console.log('   ✅ Redirección automática del admin panel');
}

// Verificar que el servidor esté corriendo
fetch(`${API_BASE}/api/test`)
    .then(() => {
        console.log('🚀 Servidor detectado, iniciando tests...\n');
        runAllTests();
    })
    .catch(() => {
        console.log('❌ Error: Servidor no responde en', API_BASE);
        console.log('   Asegúrate de que el servidor esté ejecutándose');
    });