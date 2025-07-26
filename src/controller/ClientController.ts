import { Request , Response } from "express"
import { Contact } from "../models/Contact"

export class ClientController  { 
    static async getAllClient ( req : Request , res : Response) {
        
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

    static async deleteClient ( req : Request , res : Response) {
        
        const { id } = req.params

        try {

            const cliente = await Contact.findById(id)

            if(!cliente) {
                res.status(404).json({ error: "Cliente no encontrado" })
                return
            }

            res.status(200).json({ message: "Cliente eliminado correctamente" })

        } catch (error) {

            res.status(500).json({ error : "Hubo un error al eliminar el cliente"})

        }

    }
}