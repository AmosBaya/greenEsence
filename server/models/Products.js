const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    price:{
        type:Number,
        required:true
    },

    category:{
        type:mongoose.Schema.ObjectId,
        ref:'Categories',
        required:true
    },


    benefits:{
        type:String,
        default:""
    },

    howToUse:{
        type:String,
        default:""
    },

    images:{
        type:[String],
        default:[]
    },

    /*thumbnail: {
        type: String,
    },*/

    deleted: {
        type: Boolean,
        default: false
    },
        
},
    {
     timestamps: true
    }

);

module.exports = mongoose.model('Product', productSchema);
