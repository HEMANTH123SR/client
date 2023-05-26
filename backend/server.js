const express=require('express');
const mongoose=require('mongoose');
const { product } = require("./router/product");
require ('dotenv').config();
const App=express();

App.use((req,res,next)=>{
    console.log(req.url)
    next();
})

App.use('/api/product',product)


mongoose.connect(process.env.URL)
.then(
App.listen(process.env.PORT,()=>{
    console.log(`the server started and db connected && port number ${process.env.PORT}`)
})
)
.catch(err=>console.log(err))