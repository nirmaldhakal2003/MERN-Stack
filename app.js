require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')

const app = express() 
app.use(express.json())
const {multer,storage} = require('./multer/multerConfig')
const Blog = require('./model/blogModel')
const upload = multer({storage : storage })

connectToDatabase()

app.get("/",(req,res)=>{
    res.status(200).json({
        hello : "This is home page"
    })
})

app.post("/blog",upload.single('image'), async (req,res)=>{
   const {title,subtitle,description} = req.body 
   const filename = req.file.filename 
   console.log(req.body)
   if(!title || !subtitle || !description){
        return res.status(400).json({
            message : "Please provide title,subtitle,description"
        })
        
   }
   await Blog.create({
    title : title, 
    subtitle : subtitle, 
    description : description, 
    image : filename
   })
    
    res.status(200).json({
        message : "Blog api hit successfully"
    })
})

app.get("/blog",async (req,res)=>{
   const blogs =  await Blog.find() // returns array
   res.status(200).json({
    message : "Blogs fetched successfully", 
    data : blogs
   })
})

app.use(express.static('./storage'))

app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started")
})