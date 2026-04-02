const express = require('express');
const router = express.Router();

// controller imports
const {
    viewFullBlog,
    viewBlogs
} = require('../controllers/blogController');


router.get("/fullBlog/:id", viewFullBlog);

router.get("blogs", viewBlogs);

module.exports = router;