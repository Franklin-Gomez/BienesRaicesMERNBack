import { Request , Response } from "express"
import { propertySchema } from "../schema"
import { Property } from "../models/Property"

export class PropertyController { 
    
    static createProperty = async ( req : Request , res : Response ) => {

        const dataParse = propertySchema.parse( req.body )

        const modelProperty =  new Property( dataParse )

        try {
            await modelProperty.save()

            res.status(200).send("Propiedad Creada Correctamente")
            return

        } catch (error) {
            
            res.status(400).send("Error al Crear Propiedad")

        }

    }
    
    static getAllProperty = async ( req : Request , res : Response) => { 
         
        try {
            const properties = await Property.find({})

            res.status(200).json(properties)
        
        } catch (error) {
            res.status(400).send("Error al Traer las Propiedad")
        } 

    }

    static getThreeProperty = async ( req : Request , res : Response) => {

        try {
            const properties = await Property.find({}).limit(3)

            console.log(properties)

            res.status(200).json(properties)
        
        } catch (error) {
            res.status(400).send("Error al Traer las Propiedad")
        }

    }

    static getOneProperty = async ( req : Request , res : Response ) => { 

        try {
            
            const id =  req.params.id 
           
            const property = await Property.findById( id )

            if(!property) { 

                const error = new Error('Error al Cargar La Propiedad')
                res.status(409).json( { error :  error.message })
                return

            }

            res.status(200).send( property )

        } catch (error) {

            res.status(400).send("Error al Treaer la Propiedad 2x")

        }

    }

    static updateProperty = async ( req : Request , res : Response ) => { 

        const id = req.params.id
        const formData = req.body
        
        try {

            const property = await Property.findById( id )

            if ( !property ) { 
                
                const error = new Error('Error al Editar La Propiedad')
                
                res.status(409).json( { error :  error.message })

                return

            }

            await Property.findByIdAndUpdate( id , formData )

            res.status(200).send("Actualizado Correctamente")
            return
            
        } catch (error) {

            res.status(500).json({ error : "Hubo un error"})

            
        }
        
    }

    static deleteProperty = async ( req : Request , res : Response ) => {
         
        const id = req.params.id 

        try {

            const property = await Property.findById( id )

            if ( !property ) { 
                
                const error = new Error('Error al Eliminar La Propiedad')
                
                res.status(409).json( { error :  error.message })

                return

            }

            await Property.deleteOne({ _id : property.id})
        
            res.status(200).send("Propiedad eliminada Correctamente")

            return
            
        } catch (error) {

            res.status(500).json({ error : "Hubo un error"})

        }
        
    }
    


}