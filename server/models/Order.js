const mongoose = require('mongoose');

const oderSchema = mongoose.Schema({
    customerId:{
        type:mongoose.Schema.ObjectId,
        ref:'CustomerDetails',
        required:true
    },

    products:[{
        productId:{
            type:mongoose.Schema.ObjectId,
            ref:'Products',
            required:true
        }
    }],

    quantity:{
        type:Number,
        required:true,
        min:true
    },

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
