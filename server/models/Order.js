const mongoose = require('mongoose');

const oderSchema = mongoose.Schema({

    customerDetails:{
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
    },
    

    products:[{
        productId:{
            type:mongoose.Schema.ObjectId,
            ref:'Products',
            required:true
        },
        name: {
            type: String
        }, 
        price: {
            type: Number
        }, 
        quantity:{
            type:Number,
            required:true,
            min:1
        },
    }],

    total:{
        type:Number,
        required:true,
        min:0
    },

    status:{
        type:String,
        enum:["Pending", "Delivered", "Cancelled"],
        default:"Pending"
    },

    timestamps: {
        createdAt: 'addedAt'
    } 
});

module.exports = mongoose.model("Order", oderSchema);
