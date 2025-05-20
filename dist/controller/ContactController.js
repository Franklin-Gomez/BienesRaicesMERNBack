"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContacController = void 0;
const Contact_1 = require("../models/Contact");
class ContacController {
    static createContact = async (req, res) => {
        try {
            const contact = new Contact_1.Contact(req.body);
            await contact.save();
            res.status(200).json({ message: "Contacto Guardado Satisfactoriamente" });
            return;
        }
        catch (error) {
            console.error("Error al guardar contacto:", error);
            res.status(400).json({ error: "Todos los campos son requeridos" });
            return;
        }
    };
}
exports.ContacController = ContacController;
//# sourceMappingURL=ContactController.js.map