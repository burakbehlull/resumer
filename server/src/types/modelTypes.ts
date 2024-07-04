import { Schema, Document } from "mongoose"

interface ICV extends Document {
    content: any[],
    user: Schema.Types.ObjectId,
    createdAt: Date
}

interface IUser extends Document {
    displayName: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date
}

export {
    ICV,
    IUser
}