import express, { request } from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()

dotenv.config()

console.log(process.env.MY_NAME)
console.log(process.env.MY_DAUGHTER_NAME)



app.use(express.json());
app.use(cors());



app.get("/", (request, response)=>{
    response.send("This is the root route!");
});

// app.get("/", (request, response)=>{
//     response.status(200).json(`looking at my root route`)
// });

// app.get("/", (request, response)=>{
//     response.json(`looking`)
// });

app.get(`/photos`, async(request, response)=>{
    const data=await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=cat`)
    const res = await data.json()

    response.json(res)
})


app.listen(8080, ()=>{
    console.log(`server running on port 8080`);
});