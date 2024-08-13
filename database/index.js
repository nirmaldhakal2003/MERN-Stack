const mongoose = require('mongoose')

async function connectToDatabase(){
   await mongoose.connect('mongodb+srv://nirmal2003:asustuf12@cluster0.3pnxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   console.log("Database connected Successfully")
}

module.exports = connectToDatabase