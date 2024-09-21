const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
    {timestamps: true}

);

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;