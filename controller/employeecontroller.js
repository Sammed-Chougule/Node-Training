const employee =require("../models/employeemodel")
const helper =require("../helper/helper")
const service =require("../sevices/service")

//adding employeedata from database
const addEmployee= async(req, res) => {
    const {name,lang,age} = req.body;
    service.add(name,lang,age,req,res);
   }

// getting employeedata from database 
const getEmployee=async(req,res)=>{
   service.get(req,res);
}

//updating employeedata from database
const updateEmployee=async(req,res)=>{
    const {name,lang,age} = req.body;
    service.update(name,lang,age,req,res);
}

//removing employeedata from database
const removeEmployee = async(req,res)=>{
    const {name} =req.body;
    service.remove(req,res);
}

module.exports={addEmployee,getEmployee,removeEmployee,updateEmployee}








