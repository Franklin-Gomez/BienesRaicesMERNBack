"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const PropertyRouter_1 = __importDefault(require("./routes/PropertyRouter"));
const ContactRouter_1 = __importDefault(require("./routes/ContactRouter"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const cors_1 = __importDefault(require("cors"));
// leer las variables de entorno
dotenv_1.default.config();
// instancia de conexion DB
(0, db_1.connectDB)();
// instancia del servidor
exports.app = (0, express_1.default)();
// Permitir peticiones
exports.app.use((0, cors_1.default)());
// leer datos en formato json
exports.app.use(express_1.default.json());
// router
exports.app.use('/api/property', PropertyRouter_1.default); // use = support method HTTP
exports.app.use('/api/contact', ContactRouter_1.default); // use = support method HTTP
exports.app.use('/api/user', AuthRoutes_1.default); // use = support method HTTP
//# sourceMappingURL=server.js.map