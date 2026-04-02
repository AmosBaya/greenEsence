const express = require('express');
const router = express.Router();

// controller imports
const {
    createCategory
} = require('../controllers/categoryController');

router.post("/create", createCategory);

module.exports = router;

