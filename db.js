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

var roommateRequestSchema=mongoose.Schema({
    userId: String,
    area:String,
    city:String,
    rent:Number,
    numberOfRoommates:Number,
    createdDate:{
        type:Date,
        default:Date.now
    }
})

exports.RommateRequest=mongoose.model('RoommateRequest',roommateRequestSchema,'requests')