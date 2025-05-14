import { Router } from "express"
import { ContacController } from "../controller/ContactController"

const router = Router()

router.post('/', ContacController.createContact)

export default router