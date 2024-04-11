import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

function db():Promise<void>{
    const conn = mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('Veritabanına bağlandı'))
    .catch((err)=> console.log('Hata: ', err))
    return conn
}

export default db