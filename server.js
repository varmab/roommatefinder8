var express=require('express');
var app=express();

var users=require("./routes/users");

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/users",users);

app.listen(5000,()=>{
    console.log("Server is started")
})