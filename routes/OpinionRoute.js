import express from "express";
import OpinionController from "../controllers/OpinionController.js";

const routerOpin = express.Router();


routerOpin.post('/opinion', OpinionController.crearOpinion);
routerOpin.put('/opinion/:id', OpinionController.modificarOpinion);
routerOpin.get('/opinion', OpinionController.listarOpiniones);
routerOpin.delete('/opinion/:id', OpinionController.eliminarOpinion);
routerOpin.get('/opinion/:id', OpinionController.buscarUno);


export default routerOpin;