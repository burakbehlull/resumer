import { Request,Response } from "express"

function Index(req:Request,res:Response){
    res.send('merhaba resumer! ts')
}
export {
    Index
}