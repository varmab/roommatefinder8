var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(5000,()=>{
    console.log("Server is started")
})