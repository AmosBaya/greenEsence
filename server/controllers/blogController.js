const Blog = require('../models/Blog');

//ADMIN ROUTES
//Creating a blog post
exports.createBlog = async (req, res)=>{
    try {
        const blogPost = new Blog(req.body);

        const newPost = await blogPost.save();

        res.status(201).json({
            message:"Blog post created successfully",
            data: newPost
        });

    } catch (err) {
        res.status(400).json({
            message:"Blog not created", 
            error: err.message
        });
    }
}

// Updating/editing a blog post
exports.updateBlog = async (req, res)=>{
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!updatedBlog){
            return res.status(404).json({
                message:"Blog post not found!"
            });
        }

        res.status(200).json({
            message:"Blog post updated successfully",
            data: updatedBlog});

    } catch (err) {
        res.status(400).json({
            message:"Error in updating the blog", 
            error: err.message
        })
    }
}

// Deleting a blog post
exports.deleteBlog = async (req, res)=>{
    try {
        const deletedBlog = await Blog.findByIdAndDelete( req.params.id );

        if(!deletedBlog){
            return res.status(404).json({
                message:"Blog post not found!"
            })
        }

        res.status(200).json({
            message:"Blog Deleted Successfully!",
            data: deletedBlog
        });    

    } catch (err) {
        res.status(400).json({
            message:"Error in deleting a blog", 
            error: err.message
        });
    }
}

// USER ROUTES
// Viewing a blog with the full content
exports.viewFullBlog = async (req, res)=>{
    try {
        const blog = await Blog.findById(
            req.params.id
        );

        if(!blog){
            return res.status(404).json({
                message:"Blog not found!"
            })
        }

        res.status(200).json({
            message: "One full blog successfully viewed",
            data: blog
        });

    } catch (err) {

        res.status(400).json({
            message:"Error in fetching the post", 
            error: err.message
        })
    }
}

// Viewing all blogs without the full content
exports.viewBlogs = async (req, res)=>{
    try {
        const blogs = await Blog.find().sort({createdAt:-1}).select('-content');

        if(!blogs || blogs.length === 0){
            return res.status(404).json({
                message:"No blog posts found"
            });
        }

        res.status(200).json({
            message:"List of all blogs successfully viewed",
            count: blogs.length,
            data: blogs
        });

    } catch (err) {

        res.status(400).json({
            message:"Error in fetching the posts", 
            error: err.message
        })
    }
}

