const mongoose = require('mongose')
const Schema = mongoose.Schema


const blogSchema = new Schema({
    title : {
        type : String,
        unique : true
    },
    subtitle : {
        type : String
    },
    description : {
        type : Text
    },
    image : {
        type: String
    }
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog


