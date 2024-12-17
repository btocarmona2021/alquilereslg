import db from "../db/conexion.js";
import {DataTypes} from 'sequelize';
import bcrypt from "bcrypt";

const Usuario = db.define('usuario', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            validate: {isEmail: true},
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        tipo_usuario: {
            type: DataTypes.ENUM('cliente', 'administrador'),
            allowNull: false,
        },
        foto_perfil: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        contrasena_encriptada: {
            type: DataTypes.STRING(255),
            allowNull: false, // Asegúrate de que este campo sea obligatorio
        }
    },
    {
        hooks: {
            // Hook antes de guardar el usuario, encriptando la contraseña
            beforeCreate: async (usuario, options) => {
                if (usuario.contrasena_encriptada) {
                    const salt = await bcrypt.genSalt(10); // Sal para encriptación
                    usuario.contrasena_encriptada = await bcrypt.hash(usuario.contrasena_encriptada, salt);
                }
            },
            beforeUpdate: async (usuario, options) => {
                if (usuario.contrasena_encriptada) {
                    const salt = await bcrypt.genSalt(10); // Sal para encriptación
                    usuario.contrasena_encriptada = await bcrypt.hash(usuario.contrasena_encriptada, salt);
                }
            }
        },
        tableName: 'usuarios',
        timestamps: false,
    });


export default Usuario;
