import { Request,Response } from "express"

function Index(req:Request,res:Response){
    console.log(2)
    res.send('merhaba resumer! ts')
}

export {
    Index
}