import express, {Application, Request, Response} from 'express'
import cors, {CorsOptions} from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

// dosyalar
import db from './config/db.js'
import pageRoute from './routers/pageRoute.js'
import userRoute from './routers/userRoute.js'
import authRoute from './routers/authRoute.js'

const app:Application = express()

db()
const corsOptions : CorsOptions = {
    origin: true,
    credentials: true
}

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors(corsOptions))
app.use(morgan('dev'))

// sayfalar
app.use('/', pageRoute)
app.use('/api', userRoute)
app.use('/auth', authRoute)

app.listen(process.env.PORT || 80, ()=> console.log('80 portunda başlatıldı.'))

