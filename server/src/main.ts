import express, {Application, Request, Response} from 'express'
const app:Application = express()

import pageRoute from './routers/pageRoute.js'

app.use('/', pageRoute)
app.listen(80, ()=> console.log('80 portunda başlatıldı.'))

