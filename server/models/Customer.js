const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

    customerName:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        lowerCase:true,
        trim:true
    },

    phone:{
        type:Number,
        required:true
    },

    location:{
        type:String,
        required:true
    }

}, { timestamps:true });

module.exports = mongoose.model("Customer", customerSchema);

