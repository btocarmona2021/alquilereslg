import OpinionModel from "../models/OpinionModel.js";

export const crearOpinion = async (req, res) => {
    try {
        const {
            usuario_id,
            propiedad_id,
            calificacion,
            comentario,
            fecha_opinion
        } = req.body;

        if (!usuario_id || !propiedad_id || !calificacion) {
            res.status(400).json({message: "Uno o mas campos no esta vacio o nulo"})
            return;
        }
        const opinion = await OpinionModel.create({usuario_id, propiedad_id, calificacion, comentario, fecha_opinion});
        res.status(200).json(opinion);


    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const modificarOpinion = async (req, res) => {
    try {
        const {
            usuario_id,
            propiedad_id,
            calificacion,
            comentario,
            fecha_opinion
        } = req.body;

        if (!usuario_id || !propiedad_id || !calificacion) {
            res.status(400).json({message: "Uno o mas campos no esta vacio o nulo"})
            return;
        }
        const [opinion] = await OpinionModel.update({
            usuario_id,
            propiedad_id,
            calificacion,
            comentario,
            fecha_opinion
        }, {where: {id: req.params.id}});
        if (opinion === 0) {
            res.status(404).json({message: "Opinion no encontrada"});
            return;
        }
        res.status(200).json({message: "Opinion actualizada correctamente"})

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const listarOpiniones = async (req, res) => {
    try {
        const opiniones = await OpinionModel.findAll();
        if (opiniones.length === 0) {
            res.status(404).json({message: "No hay opiniones para listar"})
            return;
        }
        res.status(200).json(opiniones);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const eliminarOpinion = async (req, res) => {
    try {
        const eliminado = await OpinionModel.destroy({where: {id: req.params.id}});
        if (!eliminado) {
            res.status(404).json({message: "Opinion no encontrada"});
            return;
        }
        res.status(200).json({message: "Opinion eliminada correctamente"})
        ;
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const buscarUno = async (req, res) => {
    try {
        const opinion = await OpinionModel.findOne({where: {id: req.params.id}});
        if (opinion === 0) {
            res.status(404).json({message: "Opinion no encontrada"});
            return;
        }
        res.status(200).json(opinion);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export default {
    crearOpinion,
    modificarOpinion,
    listarOpiniones,
    eliminarOpinion,
    buscarUno,
}