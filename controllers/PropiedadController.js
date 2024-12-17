import PropiedadModel from "../models/PropiedadModel.js";

export const crearPropiedad = async (req, res) => {

    try {
        const {
            titulo,
            descripcion,
            ubicacion,
            precio_por_noche,
            capacidad_personas,
            tipo_propiedad,
            imagen_principal
        } = req.body;

        if (!titulo || !ubicacion || !precio_por_noche || !capacidad_personas || !tipo_propiedad) {
            res.status(400).json({message: "Algunos de los campos estan vacios verifique"});
        } else {
            const propiedad = await PropiedadModel.create({
                titulo,
                descripcion,
                ubicacion,
                precio_por_noche,
                capacidad_personas,
                tipo_propiedad,
                imagen_principal
            });
            res.status(200).json({propiedad});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

export const modificarPropiedad = async (req, res) => {
    try {
        const {
            titulo,
            descripcion,
            ubicacion,
            precio_por_noche,
            capacidad_personas,
            tipo_propiedad,
            imagen_principal
        } = req.body;

        if (!titulo || !ubicacion || !precio_por_noche || !capacidad_personas || !tipo_propiedad) {
            res.status(400).json({message: "Algunos de los campos estan vacios verifique"});
        } else {
            const [propiedad] = await PropiedadModel.update({
                titulo,
                descripcion,
                ubicacion,
                precio_por_noche,
                capacidad_personas,
                tipo_propiedad,
                imagen_principal
            }, {where: {id: req.params.id}});
            if (propiedad === 0) {
                res.status(404).json({message: "Propiedad no encontrada"});
            } else {
                res.status(200).json({message: "Propiedad Actualizada correctamente"});
            }
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const listarPropiedades = async (req, res) => {
    try {
        const propiedades = await PropiedadModel.findAll();
        if (propiedades === 0) {
            res.status(404).json({Detalles: "No hay propiedades a mostrar"});
            return;
        }
        res.status(200).json(propiedades);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const eliminarPropiedad = async (req, res) => {
    try {
        const eliminado = await PropiedadModel.destroy({where:{id: req.params.id}});

        if (eliminado === 0) {
            res.status(404).json({message: "Propiedad no encontrada"});
            return;
        }
        res.status(200).json({message: "Propiedad eliminada correctamente"});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const buscarUno = async (req,res) => {
   try {
       const propiedad = await PropiedadModel.findOne({where:{id:req.params.id}});
       if (propiedad === null){
           res.status(404).json({message:"Propiedad no encontrada"});
        return;
       }
       res.status(200).json(propiedad);
     }catch (error) {
       res.status(400).json({message:error.message});
     }
}

export default {
    crearPropiedad,
    modificarPropiedad,
    listarPropiedades,
    eliminarPropiedad,
    buscarUno,
}