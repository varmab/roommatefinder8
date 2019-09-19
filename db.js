var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/roommatefinder");

mongoose.Promise=global.Promise;

var userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String
    },
    password:String,
    createdDate:{
        type:Date,
        default:Date.now
    }
})

exports.User=mongoose.model('User',userSchema,'users');

