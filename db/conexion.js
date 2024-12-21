import {Sequelize} from 'sequelize';

// Configuración de Sequelize
const db = new Sequelize('reservasturisticas', 'root', 'root', {
    host: '192.168.196.64',
    dialect: 'mysql',
    logging: false,
});

// Probar conexión

const testConnection = async () => {
    try {
        await db.authenticate();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar con la base de dato:', error.message);
    }
};

testConnection();

export default db;

