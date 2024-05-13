import express, {Router} from "express";
import {findUser} from '../controllers/userControllers.js'
const router: Router = express.Router()

router.route('/findUser').get(findUser)

export default router
