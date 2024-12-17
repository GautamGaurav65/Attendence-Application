const express = require('express');
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const cors=require("cors");


//  Middleware for parsing json
app.use(express.json());


// Load environment var from .env files
dotenv.config();

// connect to the database
connectDB();


app.use(cors());





// sample route to test the api
app.get('/',(req,res)=>{
    res.send('Api is running');
});


// Define th Port
const PORT = process.env.PORT || 5000;


// start the server
app.listen(PORT,()=>{
    console.log(`server is running on port :${PORT}`);
})