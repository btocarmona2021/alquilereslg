import db from "../db/conexion.js";
import {DataTypes} from "sequelize";
import Propiedad from "./PropiedadModel.js";


const Tarifa = db.define('tarifa', {

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
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    },
    {
        tableName:'tarifas',
        timestamps: false
    }
)
Tarifa.belongsTo(Propiedad, {foreignKey: 'propiedad_id'});

export default Tarifa;


