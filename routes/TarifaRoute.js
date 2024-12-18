import express from "express";
import TarifaController from "../controllers/TarifaController.js";

const routerTarif = express.Router();

routerTarif.post('/tarifa', TarifaController.crearTarifa);
routerTarif.put('/tarifa/:id', TarifaController.modificarTarifa);
routerTarif.get('/tarifa', TarifaController.listarTarifas);
routerTarif.delete('/tarifa/:id', TarifaController.eliminarTarifa);
routerTarif.get('/tarifa/:id', TarifaController.buscarUno);

export default routerTarif;
