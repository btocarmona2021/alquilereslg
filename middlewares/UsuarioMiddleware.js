import { validationResult, check } from 'express-validator';

// Middleware de validación
export const validarUsuario = [
    check('nombre')
        .trim()
        .notEmpty().withMessage('El nombre de usuario es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
    check('email')
        .trim()
        .isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    check('contrasena_encriptada')
        .trim()
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('telefono')
        .notEmpty().withMessage('El numero de telefono no puede estar vacio'),
    // Manejo de errores
    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }
        next(); // Si no hay errores, continúa al controlador
    }
];
