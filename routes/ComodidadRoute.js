import express from "express";
import comodidadController from "../controllers/ComodidadController.js";

const router = express.Router();

router.post('/comodidad', comodidadController.crearComodidad);
router.get('/comodidad', comodidadController.listarComodidades);
router.delete('/comodidad/:id', comodidadController.eliminarComodidad);
router.put('/comodidad/:id', comodidadController.modificarComodidad);
router.get('/comodidad/:id', comodidadController.buscarUno);

export default router;