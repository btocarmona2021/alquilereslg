//importar modelo
import comodidaModel from "../models/ComodidaModel.js";

export const crearComodidad = async (req, res) => {
    try {
        //destructuracion del body
        const {nombre} = req.body;
        //validacion si el nombre esta presente si el nombre contiene espacios al principio o fin
        if (!nombre || nombre.trim() === '') {
            return res.status(400).json({error: 'El nombre no puede estar vacío'});
        }
        //ahora si creo la modalidad pasando los datos como un objeto
        const comodidad = await comodidaModel.create({
            nombre: nombre.trim(),
        });
        res.status(201).json({message: 'Comodidad creada exitosamente', comodidad});

    } catch (error) {
        res.status(500).json({error: 'Error al crear la comodidad', Detalles: error.message});
    }

}

export const modificarComodidad = async (req, res) => {
    //recupero el id del parametro enviado
    try {
        const id = req.params.id;
        const {nombre} = req.body;
        if (!nombre || nombre.trim() === '') {
            return res.status(400).json({error: 'El nombre no puede estar vacío'});
        }
        const [comodidad] = await comodidaModel.update({nombre: nombre}, {where: {id: id}});

        if (comodidad === 0) {
            res.status(404).json({message: 'Comodidad no encontrada'});
        } else {
            res.status(200).json({message: 'Comodidad actualizada correctamente'});
        }
    } catch (error) {
        res.status(400).json({Detalles: err.message})
    }
}

export const listarComodidades = async (req, res) => {
    try {
        const listadoComodidades = await comodidaModel.findAll();
        res.status(200).json(listadoComodidades)
    } catch (error) {
        res.status(400).json({Detalles: err.message})
    }
}

export const eliminarComodidad = async (req, res) => {
    try {
        const eliminado = await comodidaModel.destroy({where: {id: req.params.id}})
        if (eliminado === 0) {
            res.status(404).json({message: 'Comodidad no encontrada'});
        } else {
            res.status(200).json({message: 'Comodidad eliminada correctamente'});
        }
    } catch (error) {
        res.status(400).json({Detalles: error.message});
    }
}

export const buscarUno = async (req, res) => {
    try {
        const comodidad = await comodidaModel.findOne({
            where: {
                id: req.params.id
            }
        })
        if (comodidad === 0) {
            res.status(404).json({message: 'Comodidad no encontrada'});
        }else {
            res.status(200).json(comodidad);
        }
    } catch (error) {
        res.status(400).json({Detalles: error.message});
    }
}


export default {
    crearComodidad,
    modificarComodidad,
    listarComodidades,
    eliminarComodidad,
    buscarUno,
}