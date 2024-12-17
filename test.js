import Propiedad from "./models/PropiedadModel.js";
import Comodidad from "./models/ComodidaModel.js";
import PropiedadComodidad from "./models/PropiedadComodidadModel.js";

async function obtenerPagosConReservas() {
    try {
        const propiedadesComodidades = await PropiedadComodidad.findAll({
            include: [
                {
                    model: Propiedad,
                    attributes: ['id', 'titulo','ubicacion']
                },
                {
                    model:Comodidad,
                    attributes:['id','nombre']
                }
            ],
            attributes: ['id', 'propiedad_id','comodidad_id']
        });

        propiedadesComodidades.forEach(PropiedadComodidad => {

            const propiedadComodidad = PropiedadComodidad ? PropiedadComodidad.propiedad.dataValues : null;
            const Comodidad = PropiedadComodidad ? PropiedadComodidad.comodidad.dataValues : null;
            console.log(propiedadComodidad)
            console.log(`Pago ID: ${propiedadComodidad.id}`);
            console.log(`Monto: ${propiedadComodidad.titulo}`);
            console.log(`Fecha de Pago: ${propiedadComodidad.ubicacion}`);

            if (propiedadComodidad) {
                console.log(`Comodidades ID: ${Comodidad.id}`);
                console.log(`Comodidades: ${Comodidad.nombre}`);
            } else {
                console.log('No se encontró la reserva asociada.');
            }
            console.log('-----------------------------------');
        });
    } catch (error) {
        console.error('Error al obtener los pagos con reservas:', error);
    }
}

obtenerPagosConReservas();
