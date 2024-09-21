const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("Connected to MongoDB database successfully");
        
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;