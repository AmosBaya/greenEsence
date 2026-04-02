require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// importing mongodb connection
const connectDB = require('./config/db')

// route imports
const blogRoutes = require('./routes/blogRoutes');
const checkOutRoutes = require('./routes/checkOutRoute');
const productRoutes = require('./routes/productRoutes');
const adminOnlyRoutes = require('./routes/adminOnlyRoutes');
const categoryRoutes = require('./routes/categoryRoutes')

//CONSTS
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/api/product", productRoutes);
app.use("/api/order", checkOutRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/admin", adminOnlyRoutes);



connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})


module.exports = app;
