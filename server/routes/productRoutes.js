const express = require('express');
const router = express.Router();

// controller imports
const { 
    viewAllProducts, 
    viewSingleProduct

} = require('../controllers/productsController');


router.get("/all", viewAllProducts);

router.get("/single/:id", viewSingleProduct);

module.exports = router;