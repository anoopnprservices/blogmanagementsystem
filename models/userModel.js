const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Name field must be required"],
},
email:{
    type:String,
    required:[true,"Email field must be required"],
    unique:true,
    lowercase:true,
    trim:true,
},
phone:{
   type:String,
   required:[true,"Phone field must be required"],
   unique:true,
},
profileImage:{
    type:String,
    required:[true,"Image field must be required"],
},
password:{
    type:String,
    required:[true,"Password field must be required"],
}

},{timestamps: true}
);

const User = mongoose.model("User",userSchema);

module.exports = User;