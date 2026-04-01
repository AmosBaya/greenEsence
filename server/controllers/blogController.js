const Blog = require('../models/Blog');

//ADMIN ROUTES
//Creating a blog post
exports.createBlog = async (req, res)=>{
    try {
        const blogPost = new Blog(req.body);

        const newPost = await blogPost.Save();

        res.status(201).json(newPost);

    } catch (err) {
        res.status(400).json({Message:"Blog not posted", Error: err.message});
    }
}

// Updating/editing a blog post
exports.updateBlog = async (req, res)=>{
    try {
        const updatedBlog = await Blog.findOneAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json(updatedBlog);

    } catch (err) {
        res.status(400).json({Message:"Error in updating the blog", Error: err.message})
    }
}

// Deleting a blog post
exports.deleteBlog = async (req, res)=>{
    try {
        const deletedBlog = await Blog.findByIdAndDelete( req.params.id );
        res.status(200).json({Message:"Blog Deleted Successfully!"});        
    } catch (err) {
        res.status(400).json({Message:"Error in deleting a blog", Error: err.message});
    }
}

// USER ROUTES
// Viewing a blog with the full content
exports.viewFullBlog = async (req, res)=>{
    try {
        const blog = await Blog.findOne({slug: req.params.id});

        if(!blog){
            return res.status(404).json({Message:"Blog not foung"})
        }

        res.status(200).json(blog);

    } catch (err) {
        res.status(400).json({Message:"Error in fetching the post", Error: err.message})
    }
}

// Viewing all blogs without the full content
exports.viewBlogs = async (req, res)=>{
    try {
        const blogs = await Blog.find().sort({createdAt:-1}).select('-content');

        if(!blogs){
            return res.status(404).json({Message:"No blog posts found"});
        }

        res.status(200).json(blogs)

    } catch (err) {
        res.status(400).json({Message:"Error in fetching the posts", Error: err.message})
    }
}

