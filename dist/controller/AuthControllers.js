"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const User_1 = require("../models/User");
const auth_1 = require("../utils/auth");
const jwt_1 = require("../utils/jwt");
class AuthControllers {
    static CreateUser = async (req, res) => {
        // evitar duplicados
        const duplicado = await User_1.User.findOne({ email: req.body.email });
        if (duplicado) {
            const error = new Error('Usuario ya registrado.');
            res.status(409).json({ error: error.message });
            return;
        }
        const user = new User_1.User(req.body);
        user.password = await (0, auth_1.hasPassword)(req.body.password);
        await user.save();
        res.status(200).send('Usuario Creado Correctamente');
    };
    static login = async (req, res) => {
        try {
            // Buscar usuario 
            const user = await User_1.User.findOne({ email: req.body.email });
            // usuario no registrado
            if (!user) {
                const error = new Error("Usuario no registrado");
                res.status(406).json({ error: error.message });
                return;
            }
            const ValidateUser = await (0, auth_1.validatePassword)(req.body.password, user.password);
            // contraseña incorrecta
            if (!ValidateUser) {
                const error = new Error("Email o Contraseñá Incorrectos");
                res.status(406).json({ error: error.message });
                return;
            }
            // generamos el token de autenticacion
            const token = (0, jwt_1.generateJWT)({ id: user.id });
            res.status(200).send(token);
            return;
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }
    };
}
exports.AuthControllers = AuthControllers;
//# sourceMappingURL=AuthControllers.js.map