import UsuarioModel from "../models/UsuarioModel.js";
import {where} from "sequelize";

export const crearUsuario = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            email,
            telefono,
            direccion,
            tipo_usuario,
            contrasena_encriptada,
            foto_perfil,
        } = req.body;

        const usuario = await UsuarioModel.create({
            nombre,
            apellido,
            email,
            telefono,
            direccion,
            tipo_usuario,
            contrasena_encriptada,
            foto_perfil,
        })
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const modificarUsuario = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            email,
            telefono,
            direccion,
            tipo_usuario,
            contrasena_encriptada,
            foto_perfil,
        } = req.body;

        const [usuario] = await UsuarioModel.update(
            {
                nombre,
                apellido,
                email,
                telefono,
                direccion,
                tipo_usuario,
                contrasena_encriptada,
                foto_perfil,
            }, {where: {id: req.params.id}}
        )
        if (usuario.length === 0) {
            res.status(404).json({message: "Usuario no encontrado"});
            return;
        }
        res.status(200).json({message: "Usuario actualizado correctamente"});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        if (usuarios.length === 0) {
            res.status(404).json({message: "No se encontraron usuarios"});
            return;
        }
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const eliminarUsuario = async (req, res) => {
    try {
        const eliminado = await UsuarioModel.destroy({where: {id: req.params.id}});
        if (!eliminado) {
            res.status(404).json({message: "Usuario no encontrado"});
            return;
        }
        res.status(200).json({message: "Usuario eliminado correctamente"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const buscarUno = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findOne({where: {id: req.params.id}})
        if (!usuario) {
            res.status(404).json({message: "Usuario no encontrado"});
            return;
        }
        res.status(200).json(usuario);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export default {
    crearUsuario,
    modificarUsuario,
    listarUsuarios,
    eliminarUsuario,
    buscarUno,
}