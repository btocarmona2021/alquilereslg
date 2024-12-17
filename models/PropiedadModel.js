import db from "../db/conexion.js";
import {DataTypes} from "sequelize";


const Propiedad = db.define('propiedades', {

    id: {
        type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true
    }, titulo: {
        type: DataTypes.STRING(255), allowNull: false,
    }, descripcion: {
        type: DataTypes.TEXT, allowNull: true,
    }, ubicacion: {
        type: DataTypes.STRING(255), allowNull: false,
    }, precio_por_noche: {
        type: DataTypes.DECIMAL(10, 2), allowNull: false,
    }, capacidad_personas: {
        type: DataTypes.INTEGER, allowNull: false,
    }, tipo_propiedad: {
        type: DataTypes.ENUM('departamento', 'casa', 'habitacion', 'cabaña'), allowNull: false,
    }, imagen_principal: {
        type: DataTypes.STRING(255), allowNull: true,
    },
}, {
    timestamps: false  // Deshabilitar timestamps
})


export default Propiedad
