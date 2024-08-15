require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()
app.use(express.json())

connectToDatabase()


app.get("/",(req,res)=>{
  res.status(200).json({
    message : "This is home page "
  })
})

app.post("/blog",(req,res)=>{
  console.log(req.body)
  res.status(200).json({
    message: "Blog API hit successfully"
  })
})

app.listen(process.env.PORT,()=>{
    console.log('Node js has been started: ')
})

