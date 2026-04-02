const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },

   /* slug: {
        type: String,
        unique: true,
        lowercase: true
    },*/

    type: {
        type: String,
        enum: ['product', 'blog', 'both'],
        default: 'both'
    },

    description:{
        type:String,
        default:""
    },

},
    {
     timestamps: true
    }
    
);




module.exports = mongoose.model("Category", categorySchema);

