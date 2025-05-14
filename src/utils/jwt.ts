import  Types  from "mongoose"
import jwt from 'jsonwebtoken'


type userPayload = { 
    id : Types.ObjectId
}

export const generateJWT = ( payload : userPayload ) => { 
    const token = jwt.sign( payload , process.env.JWT_SECRET  , { 
        expiresIn : '30d'
    })

    return token 
}