const mongoose = require("mongoose");

 
const employeeschma = new mongoose.Schema(
    {
        name:{
            type:String
        },
        lang:{
            type:String
        },
        age:{
            type:Number
        }
    },{timestamps:true})

    const employee =mongoose.model("employee",employeeschma)
    module.exports=employee;