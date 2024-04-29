import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./api/routes.js"

const app = express() 

// configure env
dotenv.config({path : "./config.env"})
const port = process.env.PORT || 5000 

// MongoDB connection
const DB = process.env.DB
mongoose.connect(DB).then(()=>{
  console.log("DB connected!")
}).catch((e)=>{console.log(e.message)})

// JSON body parser
app.use(express.json())
// my api end points 
app.use(router)


app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})