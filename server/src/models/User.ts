import { Schema, model } from "mongoose"
import { IUser } from '../types/index'

const userSchema : Schema = new Schema({
    displayName: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default model<IUser>('User', userSchema)