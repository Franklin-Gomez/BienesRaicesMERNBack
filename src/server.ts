import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db"
import propertyRoute from './routes/PropertyRouter'
import contacRoute from './routes/ContactRouter'
import userRoute from './routes/AuthRoutes'
import cors from 'cors'

// leer las variables de entorno
dotenv.config()

// instancia de conexion DB
connectDB()

// instancia del servidor
export const app = express()

// Permitir peticiones
app.use( cors() )

// leer datos en formato json
app.use( express.json() )

// router
app.use('/api/property' , propertyRoute ) // use = support method HTTP
app.use('/api/contact' , contacRoute ) // use = support method HTTP
app.use('/api/user' , userRoute ) // use = support method HTTP