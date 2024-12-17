import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Usuario from "./UsuarioModel.js";
import Propiedad from "./PropiedadModel.js";

const Reserva = db.define('reserva', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        }
        ,
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
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
            allowNull: false
        }
        ,
        precio_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
        ,
        estado_historial: {
            type: DataTypes.ENUM('activa', 'completada', 'archivada'),
            allowNull: true
        }
    },
    {
        tableName: 'reservas',
        timestamps: false
    })

Reserva.belongsTo(Usuario, {foreignKey: 'usuario_id'});
Reserva.belongsTo(Propiedad, {foreignKey: 'propiedad_id'});


export default Reserva;