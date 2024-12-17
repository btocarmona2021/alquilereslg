import express from "express";
import comodidadController from "../controllers/ComodidadController.js";

const routerComod = express.Router();

routerComod.post('/comodidad', comodidadController.crearComodidad);
routerComod.get('/comodidad', comodidadController.listarComodidades);
routerComod.delete('/comodidad/:id', comodidadController.eliminarComodidad);
routerComod.put('/comodidad/:id', comodidadController.modificarComodidad);
routerComod.get('/comodidad/:id', comodidadController.buscarUno);

export default routerComod;