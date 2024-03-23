import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
function db(){
    const conn = mongoose.connect(MONGODB_URI)
    .then(()=> console.log('Veritabanına bağlandı'))
    .catch((err)=> console.log('Hata: ', err))
    return conn
}

export default db