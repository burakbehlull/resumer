import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/User.js'
import {verifyAccessTokenTypes,userUpdateTypes} from '../types/sessionTypes.js'
dotenv.config()
const JWT_KEY = process.env.JWT_KEY

function generateRefreshToken(data:object){
    return jwt.sign(data, JWT_KEY, {expiresIn: '10h'})
}

function generateAccessToken(data:object){
    return jwt.sign(data, JWT_KEY, {expiresIn: '30m'})
}

function isExpired(token:string){
    try {
        const isVerify = jwt.verify(token, JWT_KEY)
        console.log(isVerify)
        return {expired: false}
    } catch (err) {
        console.log('is err')
        if (err.name === 'TokenExpiredError') {
            console.log('Expired')
            return {expired: true}
        } else if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature'){
            return {expired: false}
        }
        console.log('null')
        return null
    }
}

async function userUpdate(email:string, value:string){
    const updateValue : userUpdateTypes = await User.findOne({email: email})
    updateValue.token = value
    updateValue.save()
    return updateValue
}



function verifyAccessToken(user:verifyAccessTokenTypes){
    try {
        let {expired} = isExpired(user.token)
        let isToken = generateRefreshToken({email: user.email})
        if(expired){
            userUpdate(user.email, isToken)
            return generateAccessToken({email: user.email})
        } 
        return generateAccessToken({email: user.email})
        

    } catch (err) {
        console.log(err)
    }
}

export {
    verifyAccessToken,
    generateAccessToken,
    generateRefreshToken,
    userUpdate
}