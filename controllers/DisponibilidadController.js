import DisponibilidadModel from "../models/DisponibilidadModel.js";
import moment from "moment";

export const crearDisponibilidad = async (req, res) => {
    try {
        const {propiedad_id, fecha, disponible} = req.body;
        console.log(propiedad_id, fecha, disponible);
        if (propiedad_id === '') {
            res.status(400).json({Deatalle: 'Debe agregar una propiedad'});
            return;
        }
        if (moment(fecha).format('DD/MM/YYYY') < moment().format('DD/MM/YYYY')) {
            res.status(400).json({error: 'La fecha ingresada no puede ser menor a la actual'})
            return;
        }
        const disponibilidad = await DisponibilidadModel.create({
            propiedad_id: propiedad_id, fecha: fecha, disponible: disponible
        });
        res.status(200).json({disponibilidad})
    } catch (error) {
        res.status(400).json({Detalles: error.message})
    }
}

export const modificarDisponibilidad = async (req, res) => {

    try {
        const {propiedad_id, fecha, disponible} = req.body;
        if (propiedad_id === '') {
            res.status(400).json({Deatalle: 'Debe agregar una propiedad'});
            return;
        }
        if (!moment(fecha).isValid() || moment(fecha).format('DD/MM/YYYY') < moment().format('DD/MM/YYYY')) {
            res.status(400).json({error: 'La fecha ingresada no puede ser menor a la actual, complete con una fecha valida'})
            return;
        }

        const [disponibilidad] = await DisponibilidadModel.update({
            propiedad_id: propiedad_id,
            fecha: fecha,
            disponible: disponible
        }, {where: {id: req.params.id}});

        if (disponibilidad === 0) {
            res.status(400).json({message: 'Disponibilidad no encontrada'});
        } else {
            res.status(200).json({message: 'Disponibilidad actualizada correctamente'});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const listarDisponibilidades = async (req, res) => {
    try {
        const disponibilidades = await DisponibilidadModel.findAll();
        if (disponibilidades === 0) {
            res.status(400).json({Detalles: 'No hay resultados'});
        } else {
            res.status(200).json(disponibilidades);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const eliminarDisponibilidad = async (req, res) => {
    try {
        const eliminado = await DisponibilidadModel.destroy({where: {id: req.params.id}});
        if (eliminado === 0) {
            res.status(404).json({message: 'Disponibilidad no encontrada'});
        } else {
            res.status(200).json({message: 'Disponibilidad eliminada correctamente'});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const buscarUno =async (req,res) => {
 try {
     const disponibilidad = await DisponibilidadModel.findOne();
     if (disponibilidad === 0){
         res.status(404).json({message:'Disponibilidad no encontrada'});
     }else{
         res.status(200).json(disponibilidad);
     }
   }catch (error) {
     res.status(400).json({message:error.message});
   }

}

export default {
    crearDisponibilidad,
    modificarDisponibilidad,
    listarDisponibilidades,
    eliminarDisponibilidad,
    buscarUno,
}