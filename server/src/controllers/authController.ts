import {Request, Response} from 'express'
import User from '../models/User.js'

async function register(req:Request, res: Response){
    try {
        const {displayName, username, email, password} = req.body
        const user = await User.findOne({ $or: [{ email: email }, { username: username }] })
        if(user) {
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

async function login(req: Request, res: Response){
    const {email, password} = req.body
    try {
        const user = await User.findOne({email: email})
        if(user) {
            if(user.password === password){
                res.json({
                    success: true,
                    message: 'Kullanıcı girişi başarılı'
                })
            }

            res.json({
                success: false,
                message: 'Parola yanlış.'
            })
        }

        res.json({
            success: false,
            message: 'Kullanıcı mevcut değil.'
        })
    } catch (err) {
        return {
            success: false,
            error: err
        }
    }
}

export {
    register,
    login
}