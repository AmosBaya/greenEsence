const Product = require('../models/Products');

// ADMIN ROUTES
// creating a product
exports.createProduct = async (req, res)=>{
    try {
        const {
            productName, 
            description,
            price,
            category,
            benefits,
            howToUse,
            images
        } = req.body

        if(!productName || !price || !category){
            return res.status(400).json({Error: "Product name, price and category are needed "})
        }

        if (typeof price !== 'number') {
            return res.status(400).json({ error: "Price must be a number" });
        }

        const newProduct = new Product(
                                {
                                    productName, 
                                    description,
                                    price,
                                    category,
                                    benefits,
                                    howToUse,
                                    images
                                }
                            )
        await newProduct.save();
        
        res.status(201).json({
            message: "Product created Successfully",
            data: newProduct
        });
    } catch (err) {
        res.status(500).json({Message:"Internal server error, product not created", Error:err.message});
    }

}

//update a product
exports.updateProduct = async (req, res)=>{
   try {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    if(!updatedProduct){
        return res.status(404).json({
            message:"Product not found",
        })
    }

    res.status(200).json({
            message:"Product updated successfully",
            data: updatedProduct
    })

   } catch (err) {

    res.status(400).json({ 
        message: "Product not updated", 
        error: err.message });
   }
}

//delete product
exports.deleteProduct = async (req, res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if(!deletedProduct){
            return res.status(404).json({
                message:"Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        });

    } catch (err) {
         res.status(400).json({ 
            message:"PRODUCT NOT DELETED", 
            error: err.message });
    }
}

// ROUTES FOR ALL
//view all products
exports.viewAllProducts = async (req, res)=>{
    try {
        const products = await Product.find();

        if(!products){
            return res.status(404).json({
                message:"Products not found"
            })
        }

        res.status(200).json({
            message:"Product list view successfully",
            data: products
        });

    } catch (err) {
        res.status(400).json({ 
            message: "Error in fetching the products", 
            error: err.message });
    }

}

exports.viewSingleProduct = async (req, res)=>{
    try {
        const singleProduct = await Product.findById(
            req.params.id
        );

        if(!singleProduct){
            return res.status(404).json({
                message:"Product not found"
            })
        }

        res.status(200).json({
            message:"Single product view success",
            data: singleProduct
        });

    } catch (err) {
        res.status(400).json({ 
            message: "Error in fetching the product", 
            error: err.message 
        });
    }
}

