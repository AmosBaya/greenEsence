const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo db connected successfully");
    } catch (error) {
        console.log("Error in connecting to mongodb")
        // console.error(error);
    }
}

module.exports = connectDB;