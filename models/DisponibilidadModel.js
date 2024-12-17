import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Propiedad from "./PropiedadModel.js";


const Disponibilidad = db.define('disponibilidad', {

        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        propiedad_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'propiedades',
                key: 'id'
            }
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        disponible: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: 'disponibilidad',
        timestamps: false
    }
)
Disponibilidad.belongsTo(Propiedad,{foreignKey:'propiedad_id'})

export default Disponibilidad;
