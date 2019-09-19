var express=require('express');
var router=express.Router();

var db=require('../db.js')

router.post("/register",(req,res)=>{
    var newUser=new db.User(req.body);
    newUser.save()
    .then((user)=>{
        res.status(200).send(user);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
})

router.post("/login",(req,res)=>{
    db.User.find({email:req.body.email,password:req.body.password})
    .then((user)=>{
        if(user){
            res.status(200).send(user);
        }
        else{
            res.status(404).send("User not found")
        }
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
})

module.exports=router;