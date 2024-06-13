import {Request, Response} from 'express'
import User from '../models/User.js'

async function findUser(req:Request, res:Response){
    const {username} = req.body
    try {
        const user = await User.findOne({username: username})
        if(user){
            return res.status(200).json({
                success: true,
                message: 'Kullanıcı bulundu!',
                user: user
            })
        }

        return res.status(204).json({
            success: true,
            message: 'Kullanıcı bulanamadı.'
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

export {
    findUser
}