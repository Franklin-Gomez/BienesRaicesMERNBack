"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Contactschema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    mensaje: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    cantidad: {
        type: String,
        require: true
    },
    choose_metodo_contacto: {
        type: String,
        required: true
    },
    metodo_contacto: {
        type: String,
        required: true
    }
});
// añadiendo el mondelo a mongoose
exports.Contact = mongoose_1.default.model('Contact', Contactschema);
//# sourceMappingURL=Contact.js.map