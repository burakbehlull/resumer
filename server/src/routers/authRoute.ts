import express, {Router} from "express";
import {login, register} from '../controllers/authController.js'
const router: Router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)

export default router
