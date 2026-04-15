const express = require('express');
const router = express.Router();

// controller imports
const { 
    viewAllProducts, 
    viewSingleProduct

} = require('../controllers/productsController');


router.get("/", viewAllProducts);

router.get("/:id", viewSingleProduct);

module.exports = router;