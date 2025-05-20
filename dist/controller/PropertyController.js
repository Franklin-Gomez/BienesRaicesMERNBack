"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyController = void 0;
const schema_1 = require("../schema");
const Property_1 = require("../models/Property");
class PropertyController {
    static createProperty = async (req, res) => {
        const dataParse = schema_1.propertySchema.parse(req.body);
        const modelProperty = new Property_1.Property(dataParse);
        console.log(modelProperty);
        try {
            await modelProperty.save();
            res.status(200).send("Propiedad Creada Correctamente");
            return;
        }
        catch (error) {
            res.status(400).send("Error al Crear Propiedad");
        }
    };
    static getAllProperty = async (req, res) => {
        try {
            const properties = await Property_1.Property.find({});
            res.status(200).json(properties);
        }
        catch (error) {
            res.status(400).send("Error al Traer las Propiedad");
        }
    };
    static getOneProperty = async (req, res) => {
        try {
            const id = req.params.id;
            const property = await Property_1.Property.findById(id);
            if (!property) {
                const error = new Error('Error al Cargar La Propiedad');
                res.status(409).json({ error: error.message });
                return;
            }
            res.status(200).send(property);
        }
        catch (error) {
            res.status(400).send("Error al Treaer la Propiedad");
        }
    };
    static updateProperty = async (req, res) => {
        const id = req.params.id;
        const formData = req.body;
        try {
            const property = await Property_1.Property.findById(id);
            if (!property) {
                const error = new Error('Error al Editar La Propiedad');
                res.status(409).json({ error: error.message });
                return;
            }
            await Property_1.Property.findByIdAndUpdate(id, formData);
            res.status(200).send("Actualizado Correctamente");
            return;
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }
    };
    static deleteProperty = async (req, res) => {
        const id = req.params.id;
        try {
            const property = await Property_1.Property.findById(id);
            if (!property) {
                const error = new Error('Error al Eliminar La Propiedad');
                res.status(409).json({ error: error.message });
                return;
            }
            await Property_1.Property.deleteOne({ _id: property.id });
            res.status(200).send("Propiedad eliminada Correctamente");
            return;
        }
        catch (error) {
            res.status(500).json({ error: "Hubo un error" });
        }
    };
}
exports.PropertyController = PropertyController;
//# sourceMappingURL=PropertyController.js.map