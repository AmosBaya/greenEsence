const Order = require('../models/Order');

exports.addCustomerDetails = async (req, res)=>{
    try {
        const { 
            customerDetails,
            products,
            total
        } = await req.body 

        if(!customerDetails || !products || !total){
            return res.status(400).json({Message: "All information is needed"});
        }

        const newOrder = Order({customerDetails, products, total});
        await newOrder.save();

        res.status(201).json({Message:"Order Placed Successfully!"});

    } catch (err) {
        res.status(400).json({Message:"Error in placing Order", Error: err.message}):
    }
}

