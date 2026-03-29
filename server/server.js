require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// importing mongodb connection
const connectDB = require('./config/db')

//CONSTS
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('Server is running on http://localhost:`${PORT}`');
    });
})


module.exports = app;
