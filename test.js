import Usuario from './models/UsuarioModel.js';
//
// // Crear un usuario de prueba
// async function crearUsuario() {
//     try {
//         const nuevoUsuario = await Usuario.create({
//             nombre: 'Juan',
//             apellido: 'Perez',
//             email: 'juan.perez2@example.com',
//             telefono: '123456789',
//             direccion: 'Calle Falsa 123',
//             tipo_usuario: 'cliente',
//             contrasena_encriptada: 'miPassword123'
//         });
//         console.log('Usuario creado:', nuevoUsuario);
//     } catch (err) {
//         console.log('Error al crear el usuario:', err);
//     }
// }
//
// crearUsuario();

// import Propiedad from './models/PropiedadModel.js';  // Asegúrate de la ruta correcta
//
// // Función para crear una propiedad de prueba
// async function crearPropiedad() {
//     try {
//         const nuevaPropiedad = await Propiedad.create({
//             titulo: 'Casa de campo',
//             descripcion: 'Una hermosa casa en el campo',
//             ubicacion: 'Avenida Las Flores 456',
//             precio_por_noche: 150.00,
//             capacidad_personas: 6,
//             tipo_propiedad: 'casa',
//             imagen_principal: 'casa_campo.jpg',
//         });
//
//         console.log('Propiedad creada:', nuevaPropiedad);
//     } catch (err) {
//         console.log('Error al crear la propiedad:', err);
//     }
// }
//
// crearPropiedad();


import db from './db/conexion.js';
import Tarifa from './models/TarifaModel.js';
import Propiedad from './models/PropiedadModel.js';

// Función para crear una propiedad de prueba
async function crearPropiedad() {
    try {
        const nuevaPropiedad = await Propiedad.create({
            titulo: 'Casa de lujo',
            descripcion: 'Una casa con todas las comodidades',
            ubicacion: 'Avenida del Sol 123',
            precio_por_noche: 300,
            capacidad_personas: 4,
            tipo_propiedad: 'casa',
            imagen_principal: 'casa_lujo.jpg'
        });
        console.log('Propiedad creada:', nuevaPropiedad);
        return nuevaPropiedad;
    } catch (err) {
        console.error('Error al crear la propiedad:', err);
    }
}

// Función para crear una tarifa de prueba
async function crearTarifa() {
    try {
        const propiedadId = 3; // Cambia esto al ID de la propiedad que ya tienes en la base de datos
        const propiedad = await Propiedad.findByPk(propiedadId);

        // Luego, creamos la tarifa asociada a la propiedad
        const nuevaTarifa = await Tarifa.create({
            propiedad_id: propiedad.id,
            fecha_inicio: new Date('2024-12-20'),
            fecha_fin: new Date('2024-12-30'),
            precio: 250.00
        });

        console.log('Tarifa creada:', nuevaTarifa);
    } catch (err) {
        console.error('Error al crear la tarifa:', err);
    }
}

// Llamamos a la función para crear la tarifa
crearTarifa();
