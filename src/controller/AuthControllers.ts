import { Request , Response } from "express"
import { User } from "../models/User"
import { hasPassword, validatePassword } from "../utils/auth"
import { generateJWT } from "../utils/jwt"

export class AuthControllers  { 

    static CreateUser = async ( req : Request , res : Response) => { 

        // evitar duplicados
        const duplicado = await User.findOne({ email : req.body.email })

        if( duplicado ) { 
            const error = new Error('Usuario ya registrado.')
            res.status(409).json( { error :  error.message })
            return
        }

        const user = new User( req.body )

        user.password = await  hasPassword( req.body.password)

        await user.save()

        res.status(200).send('Usuario Creado Correctamente')

    }

    static login = async ( req : Request , res : Response ) => { 
        try {

            // Buscar usuario 
            const user = await  User.findOne({ email : req.body.email})

            // usuario no registrado
            if (!user ) { 
                const error = new Error("Usuario no registrado")
                res.status(406).json({ error : error.message})
                return
            }

            const ValidateUser = await validatePassword( req.body.password , user.password ) 
            
            // contraseña incorrecta
            if( !ValidateUser ) { 
                const error = new Error("Email o Contraseñá Incorrectos")
                res.status(406).json({ error : error.message})
                return
            }
                
            // generamos el token de autenticacion
            const token = generateJWT( { id : user.id } )

            res.status(200).send( token )
            return
            
        } catch (error) {
            
            res.status(500).json({ error : "Hubo un error"})

        }

    }

}