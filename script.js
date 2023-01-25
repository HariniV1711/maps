const express = require("express");
const bodyparser= require("body-parser");
const mongoose = require('mongoose')
const app =express()

app.use (express.json());
app.use(express.urlencoded({extended:true}));

app.use("/router",require('./routers/router'));

mongoose.connect("mongodb://127.0.0.1:27017/map").then(()=>{
    console.log("Database connected Successfully");
}).catch((err)=>{
    console.log(err);
   console.log("Connection error");
})



app.listen(2000,console.log("Application started on server 2000"))
    

