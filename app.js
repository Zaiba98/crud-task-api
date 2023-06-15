const express=require('express');

 const app=express();
 
const mongoose=require('./database/mongoose').default;
 var port=3000;

 app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
 })