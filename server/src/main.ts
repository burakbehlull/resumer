import express, {Application, Request, Response} from 'express'
import cors, {CorsOptions} from 'cors'

// files
import pageRoute from './routers/pageRoute.js'

const app:Application = express()

const corsOptions : CorsOptions = {
    origin: true,
    credentials: true
}

// middlewares
app.use(cors(corsOptions))

// pages
app.use('/', pageRoute)


app.listen(80, ()=> console.log('80 portunda başlatıldı.'))

