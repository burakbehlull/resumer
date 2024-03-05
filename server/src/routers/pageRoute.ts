import express, { Express,Router } from "express";
import {Index} from '../controllers/pageController.js'
const router: Router = express.Router()

router.route('/').get(Index)

export default router