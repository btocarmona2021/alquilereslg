import db from '../db/conexion.js';
import {DataTypes} from "sequelize";


const Comodidad = db.define('comodidad', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        tableName:'comodidades',
        timestamps: false
    }
)


export default Comodidad;