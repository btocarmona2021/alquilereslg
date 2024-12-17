import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Reserva from "./ReservaModel.js";

const Pago = db.define('pago', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        reserva_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'reservas',
                key: 'id'
            }
        },
        fecha_pago: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        metodo_pago: {
            type: DataTypes.ENUM('tarjeta', 'efectivo', 'transferencia'),
            allowNull: false,
        },
        estado_pago: {
            type: DataTypes.ENUM('pendiente', 'completado', 'fallido'),
            allowNull: false
        }

    },
    {
        tableName: 'pagos',
        timestamps: false
    })

Pago.belongsTo(Reserva, { foreignKey: 'reserva_id' });

export default Pago;