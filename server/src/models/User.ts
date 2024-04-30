import { Schema, model, Document } from "mongoose"

interface IUser extends Document {
    displayName: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date
}

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