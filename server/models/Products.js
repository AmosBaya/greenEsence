const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },

    description:{
        type:String
    },

    price:{
        type:Number,
        required:true
    },

    benefits:{
        type:String
    },

    howToUse:{
        type:String
    },

    images:{
        type:[String]
    },

    thumbnail: {
        type: String,
    },

    deleted: {
        type: Boolean,
        default: false
    },

    timestamps: {
        createdAt: 'addedAt'
    } 
        
});

exports.module = mongoose.model('Product', productSchema);
