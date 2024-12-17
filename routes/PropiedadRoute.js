import express from "express";
import propiedadController from "../controllers/PropiedadController.js";

const routerPropied = express.Router();

routerPropied.post('/propiedad', propiedadController.crearPropiedad);
routerPropied.put('/propiedad/:id', propiedadController.modificarPropiedad);
routerPropied.get('/propiedad', propiedadController.listarPropiedades);
routerPropied.delete('/propiedad/:id', propiedadController.eliminarPropiedad);
routerPropied.get('/propiedad/:id', propiedadController.buscarUno);

export default routerPropied;