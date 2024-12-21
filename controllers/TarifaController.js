import TarifaModel from "../models/TarifaModel.js";
import moment from "moment";

export const crearTarifa = async (req, res) => {
    try {
        const {
            propiedad_id,
            fecha_inicio,
            fecha_fin,
            precio
        } = req.body;
        if (!propiedad_id || !fecha_inicio || !fecha_fin || !precio) {
            res.status(400).json({message: "Verifique los campos"})
            return;
        }
        const fechaInicioMoment = moment(fecha_inicio, "YYYY/MM/DD", true);
        const fechaFinMoment = moment(fecha_fin, "YYYY/MM/DD", true);

        if (!fechaInicioMoment.isValid() || !fechaFinMoment.isValid()) {
            res.status(400).json({ message: "Las fechas deben estar en formato válido (YYYY/MM/DD)" });
            return;
        }


        const tarifa = await TarifaModel.create({
            propiedad_id,
            fecha_inicio,
            fecha_fin,
            precio
        });
        res.status(200).json(tarifa);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const modificarTarifa = async (req, res) => {
    try {
        const {
            propiedad_id,
            fecha_inicio,
            fecha_fin,
            precio
        } = req.body;

        const [tarifa] = await TarifaModel.update({
            propiedad_id,
            fecha_inicio,
            fecha_fin,
            precio
        }, {where: {id: req.params.id}});

        if (!propiedad_id || !fecha_inicio || !fecha_fin || !precio) {
            res.status(400).json({message: "Verifique los campos"})
            return;
        }
        if (moment(fecha_inicio) > moment(fecha_fin)) {
            res.status(400).json({message: "La fecha de finalizacion no puede ser menor a la de inicio"});
            return;
        }
        if (tarifa === 0) {
            res.status(200).json({message: "Tarifa no encontrada"});
            return;
        }
        res.status(200).json({message: "Tarifa actualizada correctamente"});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const listarTarifas = async (req, res) => {
    try {
        const tarifas = await TarifaModel.findAll();
        if (tarifas.length === 0) {
            res.status(404).json({message: "No se encontraron tarifas"});
            return;
        }
        res.status(200).json(tarifas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const eliminarTarifa = async (req, res) => {
    try {
        const eliminado = await TarifaModel.destroy({where: {id: req.params.id}});
        if (eliminado === 0) {
            res.status(404).json({message: "Tarifa no encontrada"});
            return;
        }
        res.status(200).json({message: "Tarifa eliminada correctamente"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const buscarUno =async (req,res) => {
   try {
       const tarifa = await TarifaModel.findOne({where:{id:req.params.id}});
       if (tarifa === null){
           res.status(404).json({message:"Tarifa no encontrada"});
           return;
       }
       res.status(200).json(tarifa);
     }catch (error) {
       res.status(400).json({message:error.message});
     }
}

export default {
    crearTarifa,
    modificarTarifa,
    listarTarifas,
    eliminarTarifa,
    buscarUno,
};