import express from "express";
import DisponibilidadController from "../controllers/DisponibilidadController.js";


const routerDispon = express.Router();

routerDispon.post('/disponibilidad', DisponibilidadController.crearDisponibilidad);
routerDispon.put('/disponibilidad/:id', DisponibilidadController.modificarDisponibilidad);
routerDispon.get('/disponibilidad/', DisponibilidadController.listarDisponibilidades);
routerDispon.delete('/disponibilidad/:id', DisponibilidadController.eliminarDisponibilidad);
routerDispon.get('/disponibilidad/:id', DisponibilidadController.buscarUno);

export default routerDispon;
