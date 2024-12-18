import express from "express";
import imagenController from "../controllers/ImagenController.js";

const routerImage = express.Router();

routerImage.post('/imagen',imagenController.crearImagenes);
routerImage.put('/imagen/:id',imagenController.modificarImagen);
routerImage.get('/imagen',imagenController.listarImagenes);
routerImage.delete('/imagen/:id',imagenController.eliminarImagen);
routerImage.get('/imagen/:id',imagenController.buscarUno);

export default routerImage;