const mongoose = require("mongoose")

const detailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    message:{
        type:String,
        required:true

    }
})

const Register  = new mongoose.model("Register",detailsSchema)
module.exports=Register;
