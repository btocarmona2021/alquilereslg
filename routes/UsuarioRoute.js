import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import {validarUsuario} from "../middlewares/UsuarioMiddleware.js";
import usuarioController from "../controllers/UsuarioController.js";


const routerUsua = express.Router();

routerUsua.post('/usuario', validarUsuario, usuarioController.crearUsuario);
routerUsua.put('/usuario/:id', validarUsuario, usuarioController.modificarUsuario);
routerUsua.get('/usuario', usuarioController.listarUsuarios);
routerUsua.delete('/usuario/:id', usuarioController.eliminarUsuario);
routerUsua.get('/usuario/:id', usuarioController.buscarUno);

export default routerUsua;


