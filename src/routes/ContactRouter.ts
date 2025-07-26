import { Router } from "express"
import { ContacController } from "../controller/ContactController"

const router = Router()

router.post('/', ContacController.createContact)
router.get('/', ContacController.getAllContact)
router.delete('/:id', ContacController.deleteContact)   


export default router