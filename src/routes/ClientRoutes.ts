import { Router } from "express"
import { ClientController } from "../controller/ClientController"

const router = Router()

router.get('/', ClientController.getAllClient)

export default router