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
}