import {Request, Response} from 'express'
import User from '../models/User.js'
function index(req: Request, res: Response){
    res.json({})
}

async function register(req:Request, res: Response){
    try {
        const {displayName, username, email, password} = req.body
        const user = await User.findOne({email: email})
        const usernameControl = await User.findOne({username: username})
        if(user || usernameControl) {
            res.json({
                message: 'Böyle bir kullanıcı var.'
            })   
        }
        await User.create({displayName, username, email, password})
        res.json({
            success: true,
            message: 'Kullanıcı yaratıldı'
        })

    } catch (err) {
        return {
           success: false,
           error: err 
        }
    }
}

export {
    index,
    register
}