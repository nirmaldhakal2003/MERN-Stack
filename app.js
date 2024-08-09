const express = require('express')
const app = express()

app.get("/",(req,res)=>{
  res.json({
    message : "This is Home Page"
  })
})

app.listen(3000,()=>{
    console.log('NodeJs project has started')
})