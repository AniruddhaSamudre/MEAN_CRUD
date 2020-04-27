const mongoose=require('mongoose');

const employee_schema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    address:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    salary:{
        type:Number,
        trim:true,
        required:true,
        minlength:1
    }
});

const Employee=mongoose.model("Employee",employee_schema)
module.exports=Employee;