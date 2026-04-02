const Category = require('../models/Categories');


exports.createCategory = async (req, res)=>{
   try {
        const { categoryName, description, type } = req.body;

        if (!categoryName?.trim()) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const exists = await Category.exists({
            categoryName: new RegExp(`^${categoryName}$`, "i")
        });

        if (exists) {
            return res.status(409).json({ message: "Category already exists" });
        }

        const category = await Category.create({
            categoryName: categoryName.trim(),
            description,
            type
        });

        return res.status(201).json({
            message: "Category created successfully",
            data: category
        });

    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Duplicate value detected" });
        }

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
}
