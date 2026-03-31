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
        
        res.status(201).json(product, {Message: "Product created Successfully"})
    } catch (err) {
        res.status(500).json({Message:"Internal server error, product not created", Error:err.message});
    }

}

//update a product
exports.updateProduct = async (req, res)=>{
   try {
    const updatedProduct = await Product.findOneAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(200).json(updatedProduct)
   } catch (err) {

    res.status(400).json({ Message: "Product not updated", Error: err.message });

   }
}

//delete product
exports.deleteProduct = async (req, res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({Message: "Product deleted successfully"})
    } catch (error) {
         res.status(400).json({ Message:"PRODUCT NOT DELETED" , Error: err.message });
    }
}

// ROUTES FOR ALL
//view all products
exports.viewProducts = async (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ Message: "Products not found", Error: err.message });
    }

}

