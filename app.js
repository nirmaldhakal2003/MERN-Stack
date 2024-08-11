const express = require('express')
const app = express()

app.get("/",(req,res)=>{
  res.json({
    message : "This is Home Page"
  })
})
app.get("/about",(req,res)=>{
    res.json({
        message: "This is about"
    })
})

app.listen(3000,()=>{
    console.log('NodeJs project has started')
})