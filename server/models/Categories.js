const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },

    slug:{
        type:String,
        required:true,
        lowercase:true,
        unique: true
    },

    description:{
        type:String,
        default:""
    },

    timestamps:{
        createdAt:'addedAt'
    }

});

module.exports = mongoose.model("Category", categorySchema);

