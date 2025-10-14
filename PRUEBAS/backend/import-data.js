const Database = require('sqlite3').Database;
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando importación de datos completos...');

// Conectar a la base de datos
const db = new Database('miatapedia.db', (err) => {
    if (err) {
        console.error('❌ Error conectando a la base de datos:', err.message);
        process.exit(1);
    }
    console.log('✅ Conectado a la base de datos SQLite');
});

// Leer el archivo SQL
const sqlFile = path.join(__dirname, '../frontend-test/miatapedia_complete_inserts.sql');

fs.readFile(sqlFile, 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error leyendo archivo SQL:', err.message);
        process.exit(1);
    }

    console.log('📄 Archivo SQL leído correctamente');
    console.log('📊 Tamaño del archivo:', Math.round(data.length / 1024), 'KB');

    // Limpiar comentarios y líneas vacías
    const cleanedData = data
        .split('\n')
        .filter(line => !line.trim().startsWith('--') && line.trim().length > 0)
        .join('\n');

    // Dividir el SQL en statements individuales usando ; como delimitador
    const statements = cleanedData
        .split(';')
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0);

    console.log('📝 Número de statements SQL:', statements.length);

    let completed = 0;
    let errors = 0;

    // Función para ejecutar statements de forma secuencial
    function executeNext(index) {
        if (index >= statements.length) {
            console.log('🏁 Importación completada!');
            console.log('✅ Statements ejecutados:', completed);
            if (errors > 0) {
                console.log('⚠️ Errors encontrados:', errors);
            }

            // Verificar el resultado
            verifyImport();
            return;
        }

        const statement = statements[index];

        // Mostrar progreso cada 10 statements
        if (index % 10 === 0) {
            console.log(`📈 Progreso: ${index}/${statements.length}`);
        }

        db.run(statement, function(err) {
            if (err) {
                console.error(`❌ Error en statement ${index}:`, err.message);
                errors++;
            } else {
                completed++;
            }

            // Continuar con el siguiente
            executeNext(index + 1);
        });
    }

    // Iniciar la ejecución
    executeNext(0);
});

// Función para verificar la importación
function verifyImport() {
    console.log('\n🔍 Verificando importación...');

    const queries = [
        { name: 'Foros', query: 'SELECT COUNT(*) as count FROM foros' },
        { name: 'Proveedores', query: 'SELECT COUNT(*) as count FROM proveedores' },
        { name: 'Manuales', query: 'SELECT COUNT(*) as count FROM manuales' },
        { name: 'Eventos', query: 'SELECT COUNT(*) as count FROM eventos' }
    ];

    let completed = 0;

    queries.forEach(q => {
        db.get(q.query, (err, row) => {
            if (err) {
                console.error(`❌ Error verificando ${q.name}:`, err.message);
            } else {
                console.log(`✅ ${q.name}: ${row.count} entradas`);
            }

            completed++;
            if (completed === queries.length) {
                console.log('\n🎉 ¡Base de datos poblada exitosamente!');
                db.close();
                process.exit(0);
            }
        });
    });
}

// Manejar errores no capturados
process.on('uncaughtException', (error) => {
    console.error('💥 Error no capturado:', error);
    db.close();
    process.exit(1);
});