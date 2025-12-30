import express from 'express'
import "dotenv/config"
import cors from 'cors'

// intiialise server
const app = express()

// middleware
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World")
})  

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
