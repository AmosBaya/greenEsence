const mongoose = require('mongoose');

const blogSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    exerpt:{
        type:String,
        maxLength:300
    },
    content:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        default:[]
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags:{
        type:[String],
        lowercase:true
    },
    readTime:{
        type:Number,
        default:1
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Blog', blogSchema);
