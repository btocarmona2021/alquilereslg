import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Propiedad from "./PropiedadModel.js";
import Comodidad from "./ComodidaModel.js";


const PropiedadComodidad = db.define('propiedad_comodidad', {
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
        comodidad_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'comodidades',
                key: 'id'
            }

        }
    },
    {
        tableName: 'propiedad_comodidades',
        timestamps: false
    })

PropiedadComodidad.belongsTo(Propiedad, {foreignKey: 'propiedad_id'});
PropiedadComodidad.belongsTo(Comodidad, {foreignKey: 'comodidad_id'});
export default PropiedadComodidad;