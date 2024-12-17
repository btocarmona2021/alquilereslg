import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Usuario from "./UsuarioModel.js";
import Propiedad from "./PropiedadModel.js";


const Opinion = db.define('opinion', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        propiedad_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'propiedades',
                key: 'id'
            }
        }
        ,
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        ,
        comentario: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
        ,
        fecha_opinion: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
    ,
    {
        tableName: 'opiniones',
        timestamps: false
    }
)
Opinion.belongsTo(Usuario, {foreignKey: 'usuario_id'});
Opinion.belongsTo(Propiedad, {foreignKey: 'propiedad_id'});


export default Opinion;