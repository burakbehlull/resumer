import mongoose, { Connection } from 'mongoose'
const {MONGODB_URI} = process.env
async function db(): Promise<void>{
    const conn = mongoose.connect(MONGODB_URI)
    .then(()=> console.log('Veritabanına bağlandı'))
    .catch((err)=> console.log('Hata: ', err))
    return conn
}

export default db