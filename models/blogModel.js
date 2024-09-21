const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    blogImage:{
        type:String,
        required:[true,"Image is required"],
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
    {timestamps: true}
);

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;