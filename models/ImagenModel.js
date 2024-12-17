import db from '../db/conexion.js';
import {DataTypes} from "sequelize";
import Propiedad from "./PropiedadModel.js";

const Imagen = db.define('imagenes_propiedad', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        propiedad_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'propiedad',
                key: 'id'
            }
        },
        ruta_imagen: {
            type:DataTypes.STRING(255),
            allowNull:false
        }
    },
    {
        tableName: 'imagenes_propiedad',
        timestamps: false
    }
)
Imagen.belongsTo(Propiedad,{foreignKey:'propiedad_id'})

export default Imagen;
