import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pg from "pg"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.text())
dotenv.config()


const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (request, response) => {
    response.send("hello!")
})

app.get(`/bees`, (request, response) => { 
    response.json({message:"Hello from Bees!!!"})
})


app.post('/jokes', (req, res) => {
    console.log(req.body)
    res.status(200).json({message: req.body})
})

app.listen(7070, () => {
    console.log(`The server is alive on http://localhost:7070`)
})