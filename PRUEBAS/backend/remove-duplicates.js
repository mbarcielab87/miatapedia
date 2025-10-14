const Database = require('sqlite3').Database;

console.log('🧹 Iniciando limpieza de duplicados...');

// Conectar a la base de datos
const db = new Database('miatapedia.db', (err) => {
    if (err) {
        console.error('❌ Error conectando a la base de datos:', err.message);
        process.exit(1);
    }
    console.log('✅ Conectado a la base de datos SQLite');
});

// Lista de IDs duplicados a eliminar (mantenemos los originales con ID más bajo)
const duplicatesToDelete = [
    // Eventos duplicados (mantener IDs 1-5, eliminar 31-37)
    { table: 'eventos', id: 31, reason: 'Duplicado de MX-5 National Rally (ID 1)' },
    { table: 'eventos', id: 32, reason: 'Duplicado de MiataXpress España (ID 5)' },
    { table: 'eventos', id: 33, reason: 'Duplicado de MX-5 Cup IMSA (ID 3)' },
    { table: 'eventos', id: 35, reason: 'Duplicado de MiataCon Lime Rock (ID 2)' },
    { table: 'eventos', id: 37, reason: 'Duplicado de NSW MX-5 Club Events (ID 4)' }
];

let deletedCount = 0;

function deleteNext(index) {
    if (index >= duplicatesToDelete.length) {
        console.log(`🏁 Limpieza completada! Eliminados ${deletedCount} duplicados`);

        // Verificar el resultado final
        verifyCleanup();
        return;
    }

    const item = duplicatesToDelete[index];
    const query = `DELETE FROM ${item.table} WHERE id = ?`;

    console.log(`🗑️ Eliminando ${item.table} ID ${item.id}: ${item.reason}`);

    db.run(query, [item.id], function(err) {
        if (err) {
            console.error(`❌ Error eliminando ${item.table} ID ${item.id}:`, err.message);
        } else {
            if (this.changes > 0) {
                console.log(`✅ Eliminado ${item.table} ID ${item.id}`);
                deletedCount++;
            } else {
                console.log(`⚠️ No se encontró ${item.table} ID ${item.id} (ya eliminado)`);
            }
        }

        // Continuar con el siguiente
        deleteNext(index + 1);
    });
}

function verifyCleanup() {
    console.log('\n🔍 Verificando limpieza...');

    const queries = [
        { name: 'Eventos', query: 'SELECT COUNT(*) as count FROM eventos' }
    ];

    queries.forEach(q => {
        db.get(q.query, (err, row) => {
            if (err) {
                console.error(`❌ Error verificando ${q.name}:`, err.message);
            } else {
                console.log(`✅ ${q.name}: ${row.count} entradas (duplicados eliminados)`);
            }

            // Mostrar eventos restantes
            db.all('SELECT id, nombre FROM eventos ORDER BY id', (err, rows) => {
                if (err) {
                    console.error('❌ Error listando eventos:', err.message);
                } else {
                    console.log('\n📋 Eventos finales:');
                    rows.forEach(row => {
                        console.log(`  - ID ${row.id}: ${row.nombre}`);
                    });
                }

                console.log('\n🎉 ¡Base de datos limpia!');
                db.close();
                process.exit(0);
            });
        });
    });
}

// Iniciar la limpieza
deleteNext(0);