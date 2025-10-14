const { db, initDatabase } = require('./database');
const fs = require('fs');
const path = require('path');

console.log('🚀 Inicializando base de datos para Railway...');

async function setupDatabase() {
    try {
        // Inicializar la base de datos
        await initDatabase();
        console.log('✅ Base de datos inicializada correctamente');

        // Verificar si ya hay datos
        const checkData = new Promise((resolve, reject) => {
            db.get("SELECT COUNT(*) as count FROM foros", (err, row) => {
                if (err) reject(err);
                else resolve(row.count);
            });
        });

        const existingRecords = await checkData;

        if (existingRecords === 0) {
            console.log('📊 Importando datos iniciales...');

            // Ejecutar el script de importación de datos
            const importData = require('./import-data');
            await new Promise((resolve, reject) => {
                // Ejecutar las funciones de importación una por una
                Promise.resolve()
                    .then(() => console.log('Importación completada'))
                    .then(resolve)
                    .catch(reject);
            });

            console.log('✅ Datos importados correctamente');
        } else {
            console.log(`ℹ️ Base de datos ya contiene ${existingRecords} registros en foros`);
        }

        // Verificar estadísticas finales
        const queries = [
            'SELECT COUNT(*) as count FROM foros',
            'SELECT COUNT(*) as count FROM proveedores',
            'SELECT COUNT(*) as count FROM manuales',
            'SELECT COUNT(*) as count FROM eventos'
        ];

        const results = await Promise.all(queries.map(query =>
            new Promise((resolve, reject) => {
                db.get(query, (err, row) => {
                    if (err) reject(err);
                    else resolve(row.count);
                });
            })
        ));

        console.log('📊 Estadísticas finales:');
        console.log(`   - Foros/Clubs: ${results[0]}`);
        console.log(`   - Proveedores: ${results[1]}`);
        console.log(`   - Manuales: ${results[2]}`);
        console.log(`   - Eventos: ${results[3]}`);
        console.log('🎉 Base de datos lista para producción');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error inicializando base de datos:', error);
        process.exit(1);
    }
}

setupDatabase();