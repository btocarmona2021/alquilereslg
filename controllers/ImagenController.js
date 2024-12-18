import ImagenModel from "../models/ImagenModel.js";

export const crearImagenes = async (req, res) => {
    try {
        const {propiedad_id, ruta_imagen} = req.body;
        if (!propiedad_id || !ruta_imagen) {
            res.status(400).json({message: "El valor de los campos no es valido"});
            return;
        }
        const imagen = await ImagenModel.create({propiedad_id, ruta_imagen});
        res.status(200).json(imagen);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const modificarImagen = async (req, res) => {
    try {
        const {propiedad_id, ruta_imagen} = req.body;

        if (!propiedad_id || !ruta_imagen) {
            res.status(400).json({message: "El valor de los campos no es valido"});
            return;
        }
        const imagen = await ImagenModel.update({propiedad_id, ruta_imagen}, {where: {id: req.params.id}});
        if (!imagen) {
            res.status(404).json({message: "Imagen no encontrada"});
            return;
        }

        res.status(200).json({message: "Imagen actualizada correctamente"});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const listarImagenes = async (req, res) => {
    try {
        const imagenes = await ImagenModel.findAll();
        if (imagenes.length === 0) {
            res.status(404).json({message: "No se encontraron imagenes a mostrar"})
            return;
        }
        res.status(200).json(imagenes);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const eliminarImagen = async (req, res) => {
    try {
        const eliminado = await ImagenModel.destroy({where: {id: req.params.id}});
        if (!eliminado) {
            res.status(404).json({message: "Imagen no encontrada"});
            return;
        }
        res.status(200).json({message: "Imagen eliminada correctamente"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const buscarUno = async (req, res) => {
    try {
        const imagen = await ImagenModel.findOne({where: {id: req.params.id}});
        if (!imagen) {
            res.status(404).json({message: "Imagen no encontrada"});
            return;
        }
        res.status(200).json(imagen);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export default {
    crearImagenes,
    modificarImagen,
    listarImagenes,
    eliminarImagen,
    buscarUno,
}