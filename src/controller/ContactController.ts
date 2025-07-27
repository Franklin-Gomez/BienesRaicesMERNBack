import { Request , Response  } from "express";
import { Contact } from "../models/Contact";

export class ContacController { 
    static createContact =  async ( req : Request , res : Response ) => { 

        try {
            
            const contact = new Contact( req.body )
            
            await contact.save()

            res.status(200).json({ message: "Contacto Guardado Satisfactoriamente" });
            return

        } catch (error) {
            
            console.error("Error al guardar contacto:", error);
            res.status(400).json({ error: "Todos los campos son requeridos" });
            return

        }

    }

    static async getAllContact ( req : Request , res : Response) {
        
        try {

            const clientes = await Contact.find({})

            if(!clientes) {
                res.status(404).json({ error: "No se encontraron clientes" })
                return
            }

            res.status(200).json(clientes)
            
        } catch (error) {

            res.status(500).json({ error : "Hubo un error"})

        }

    }

    static async deleteContact ( req : Request , res : Response) {
        
        const { id } = req.params

        try {

            const cliente = await Contact.findById(id)

            if(!cliente) {
                res.status(404).json({ error: "Cliente no encontrado" })
                return
            }

            await Contact.deleteOne({ _id: id })

            res.status(200).json({ message: "Cliente eliminado correctamente" })

        } catch (error) {

            res.status(500).json({ error : "Hubo un error al eliminar el cliente"})

        }

    }
}