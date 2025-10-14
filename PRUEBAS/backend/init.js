const { db, initDatabase } = require('./database');

const initSampleData = async () => {
    try {
        console.log('Inicializando base de datos con datos de ejemplo...');

        await initDatabase();

        // Limpiar datos existentes
        db.run('DELETE FROM foros');
        db.run('DELETE FROM proveedores');
        db.run('DELETE FROM manuales');
        db.run('DELETE FROM eventos');

        // Datos de ejemplo - Foros
        const foros = [
            {
                nombre: 'MX-5 Owners Club UK',
                url: 'https://mx5oc.co.uk',
                pais: 'Reino Unido',
                descripcion: 'Club oficial de propietarios MX-5 del Reino Unido'
            },
            {
                nombre: 'Miata.net Forum',
                url: 'https://forum.miata.net',
                pais: 'Estados Unidos',
                descripcion: 'El foro más grande de Miata en Estados Unidos'
            },
            {
                nombre: 'MX-5 España',
                url: 'https://mx5espana.com',
                pais: 'España',
                descripcion: 'Comunidad española de entusiastas del MX-5'
            },
            {
                nombre: 'MX-5 Deutschland',
                url: 'https://mx5-deutschland.de',
                pais: 'Alemania',
                descripcion: 'Foro alemán de propietarios de MX-5'
            },
            {
                nombre: 'MX-5 Australia Forum',
                url: 'https://mx5.com.au',
                pais: 'Australia',
                descripcion: 'Foro principal de MX-5 en Australia'
            },
            {
                nombre: 'MX-5 France',
                url: 'https://mx5-france.com',
                pais: 'Francia',
                descripcion: 'Comunidad francesa de MX-5'
            }
        ];

        // Datos de ejemplo - Proveedores
        const proveedores = [
            {
                nombre: 'MegaZip',
                url: 'https://www.megazip.net',
                pais: 'Japón',
                generacion: 'NA,NB,NC,ND',
                tipo: 'OEM',
                descripcion: 'Repuestos OEM nuevos directos de Japón'
            },
            {
                nombre: 'Jim Ellis Mazda Parts',
                url: 'https://www.jimellismazdaparts.com',
                pais: 'Estados Unidos',
                generacion: 'NA,NB,NC,ND',
                tipo: 'OEM',
                descripcion: 'Concesionario oficial Mazda con repuestos OEM'
            },
            {
                nombre: 'MazdaShop',
                url: 'https://mazdashop.ca',
                pais: 'Canadá',
                generacion: 'NA,NB,NC,ND',
                tipo: 'OEM',
                descripcion: 'Accesorios y repuestos oficiales Mazda'
            },
            {
                nombre: 'MX5Parts',
                url: 'https://mx5parts.co.uk',
                pais: 'Reino Unido',
                generacion: 'NA,NB,NC,ND',
                tipo: 'nuevo',
                descripcion: 'Especialistas en repuestos MX-5 nuevos y usados'
            },
            {
                nombre: 'Autolink MX5',
                url: 'https://autolink-mx5.co.uk',
                pais: 'Reino Unido',
                generacion: 'NA,NB',
                tipo: 'segunda mano',
                descripcion: 'Especialistas en repuestos usados para MX-5 clásicos'
            },
            {
                nombre: 'UP GARAGE',
                url: 'https://www.upgarage.com',
                pais: 'Japón',
                generacion: 'NA,NB,NC,ND',
                tipo: 'segunda mano',
                descripcion: 'Marketplace japonés de repuestos usados'
            }
        ];

        // Datos de ejemplo - Manuales
        const manuales = [
            {
                nombre: 'Service Manual NA 1.6L',
                url: 'https://example.com/manual-na-16.pdf',
                generacion: 'NA',
                idioma: 'inglés',
                descripcion: 'Manual de servicio completo para MX-5 NA 1.6L'
            },
            {
                nombre: 'Service Manual NA 1.8L',
                url: 'https://example.com/manual-na-18.pdf',
                generacion: 'NA',
                idioma: 'inglés',
                descripcion: 'Manual de servicio completo para MX-5 NA 1.8L'
            },
            {
                nombre: 'Wiring Diagram NB',
                url: 'https://example.com/wiring-nb.pdf',
                generacion: 'NB',
                idioma: 'inglés',
                descripcion: 'Diagrama eléctrico completo para MX-5 NB'
            },
            {
                nombre: 'Manual de Taller NC',
                url: 'https://example.com/manual-nc-es.pdf',
                generacion: 'NC',
                idioma: 'español',
                descripcion: 'Manual de taller en español para MX-5 NC'
            },
            {
                nombre: 'ND2 Technical Manual',
                url: 'https://example.com/manual-nd2.pdf',
                generacion: 'ND',
                idioma: 'inglés',
                descripcion: 'Manual técnico para MX-5 ND2 (2019+)'
            }
        ];

        // Datos de ejemplo - Eventos
        const eventos = [
            {
                nombre: 'MX-5 National Rally UK',
                url: 'https://www.nationalrally.co.uk',
                pais_region: 'Reino Unido',
                fecha: '2024-07-15',
                descripcion: 'Rally nacional anual del Reino Unido'
            },
            {
                nombre: 'MiataXpress España',
                url: 'https://miataxpress.com',
                pais_region: 'España',
                fecha: '2024-06-20',
                descripcion: 'Comunidad y eventos MX-5 en España'
            },
            {
                nombre: 'MX-5 Cup IMSA',
                url: 'https://www.mx-5cup.com/schedule',
                pais_region: 'Estados Unidos',
                fecha: '2024-08-10',
                descripcion: 'Campeonato profesional IMSA MX-5 Cup'
            },
            {
                nombre: 'NSW MX-5 Club Events',
                url: 'https://nsw.mx5.com.au/events',
                pais_region: 'Australia',
                fecha: '2024-09-05',
                descripcion: 'Eventos del club MX-5 de New South Wales'
            },
            {
                nombre: 'MiataCon Lime Rock',
                url: 'https://limerock.com/events/miatacon',
                pais_region: 'Estados Unidos',
                fecha: '2024-10-12',
                descripcion: 'Convención anual de Miata en Lime Rock Park'
            }
        ];

        // Insertar datos usando promesas para garantizar orden
        const insertData = (table, data, fields) => {
            return new Promise((resolve, reject) => {
                const placeholders = fields.map(() => '?').join(',');
                const query = `INSERT INTO ${table} (${fields.join(',')}) VALUES (${placeholders})`;

                let inserted = 0;
                data.forEach(item => {
                    const values = fields.map(field => item[field]);
                    db.run(query, values, function(err) {
                        if (err) {
                            console.error(`Error inserting into ${table}:`, err);
                        }
                        inserted++;
                        if (inserted === data.length) {
                            resolve();
                        }
                    });
                });
            });
        };

        // Insertar todos los datos
        await insertData('foros', foros, ['nombre', 'url', 'pais', 'descripcion']);
        console.log('✓ Foros insertados');

        await insertData('proveedores', proveedores, ['nombre', 'url', 'pais', 'generacion', 'tipo', 'descripcion']);
        console.log('✓ Proveedores insertados');

        await insertData('manuales', manuales, ['nombre', 'url', 'generacion', 'idioma', 'descripcion']);
        console.log('✓ Manuales insertados');

        await insertData('eventos', eventos, ['nombre', 'url', 'pais_region', 'fecha', 'descripcion']);
        console.log('✓ Eventos insertados');

        console.log('\n🎉 Base de datos inicializada correctamente con datos de ejemplo');
        console.log('Puedes iniciar el servidor con: npm start');

    } catch (error) {
        console.error('Error inicializando la base de datos:', error);
    } finally {
        db.close((err) => {
            if (err) {
                console.error('Error cerrando la base de datos:', err);
            } else {
                console.log('Conexión a la base de datos cerrada');
            }
        });
    }
};

// Ejecutar inicialización si este archivo se ejecuta directamente
if (require.main === module) {
    initSampleData();
}

module.exports = { initSampleData };