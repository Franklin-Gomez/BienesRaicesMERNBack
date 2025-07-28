import { Router } from "express";
import { PropertyController } from "../controller/PropertyController";

const router = Router()

router.post('/', PropertyController.createProperty )
router.get('/three' , PropertyController.getThreeProperty )
router.get('/' , PropertyController.getAllProperty )
router.get('/:id' , PropertyController.getOneProperty ) // para actualizar
router.put('/:id' , PropertyController.updateProperty )
router.delete('/:id' , PropertyController.deleteProperty )

export default router;