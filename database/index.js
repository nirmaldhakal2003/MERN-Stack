const mongoose = require('mongoose')

async function connectToDatabase(){
   await mongoose.connect(process.env.MONGDOB_URI)
   console.log("Database connected Successfully")
}

module.exports = connectToDatabase