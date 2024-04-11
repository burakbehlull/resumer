import express, {Router } from "express";
import {index} from '../controllers/userControllers.js'
const router: Router = express.Router()

router.route('/').get(index)

export default router