import express, {Application, Request, Response} from 'express'

const app:Application = express()

app.get('/', (req:Request, res: Response)=> {
    res.send('Merhaba Resumer!')
})

app.listen(80, ()=> console.log('80 portunda başlatıldı.'))

