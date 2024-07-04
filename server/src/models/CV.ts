import { Schema, model } from "mongoose"
import { ICV } from '../types/index'

const cvSchema : Schema = new Schema({
    content: {
        type: Array,
        default: [],
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default model<ICV>('CV', cvSchema)