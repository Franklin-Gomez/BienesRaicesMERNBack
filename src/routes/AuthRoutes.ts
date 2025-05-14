import { Router } from "express";
import { AuthControllers } from "../controller/AuthControllers";

const router = Router()

router.post('/create-user' , AuthControllers.CreateUser )
router.post('/login' , AuthControllers.login )

export default router