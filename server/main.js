import express from 'express'

const app = express()


app.get("/", (req,res)=> {
	res.send("Home")
})

app.listen(80, ()=> console.log("80 portuyla başlatıldı"))