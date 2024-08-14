require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()

connectToDatabase()


app.get("/",(req,res)=>{
  res.json({
    message : "This is home page "
  })
})
app.get("/about",(req,res)=>{
    res.json({
        message: "This is about"
    })
})

app.listen(process.env.PORT,()=>{
    console.log('Node js has been started: ')
})

