const express = require('express');
const router = express.Router();

// controller imports
const {
    createProduct,
    updateProduct, 
    deleteProduct,
} = require('../controllers/productsController');

const {
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');


router.post("/product/create", createProduct);

router.put("/product/update/:id", updateProduct);

router.delete("/product/delete/:id", deleteProduct);

router.post("/blog/create", createBlog);

router.put("/blog/update/:id", updateBlog);

router.delete("/blog/delete/:id", deleteBlog);

module.exports = router;