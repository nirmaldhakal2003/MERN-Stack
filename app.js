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

app.listen(3000,()=>{
    console.log('Node js has been started: ')
})

// mongodb+srv://nirmal2003:<password>@cluster0.3pnxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0