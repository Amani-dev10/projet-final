const express = require('express');
const connectDB = require('./config/connectDB');
const product = require('./routes/product')
const user = require('./routes/User');


const app = express();
app.use(express.json());
app.use('/user',user);
app.use('/product',product)
connectDB();


app.listen(5000, (err)=>
    err ? console.error(err) : console.log("server running on port 5000"));