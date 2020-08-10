var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
    },
    image:{
        type:String
    }

}, { timestamps: true })

module.exports = mongoose.model("User", userSchema) 