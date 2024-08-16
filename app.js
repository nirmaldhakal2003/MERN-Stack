require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')


const app = express() 
app.use(express.json())

connectToDatabase()

app.get("/",(req,res)=>{
    res.status(200).json({
        hello : "This is home page"
    })
})

app.post("/blog",async (req,res)=>{
    const {title,description,image,subtitle} = req.body 
    if(!title || !description|| !subtitle || !image){
      return res.status(400).json({
        message: "please provide the data"
      })
    }
    await Blog.create({
       title :  title, 
       description : description, 
       subtitle : subtitle, 
       image : image
    })
    res.status(200).json({
        message : "Blog api hit successfully"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started")
})


