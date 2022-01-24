const employee =require("../models/employeemodel")

const addemployee= async(req, res) => {
    const {name,desg,age} = req.body;
    const new1 = employee.create({
        name,desg,age
    }).then((new1)=>{
        res.json(new1)
    }).catch((error)=>{
        res.json({error:error})
    })
   }

const getemployee=async(req,res)=>{
    const data = employee.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({error:error})
    })
}

const updateemployee=async(req,res)=>{
    const {name,desg,age} = req.body;
    const data =employee.findOneAndUpdate({"name":name},{"name":name,"desg":desg,"age":age}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({error:error})
    })
}

const removeemployee = async(req,res)=>{
    const {name} =req.body;
    const data =employee.findOneAndDelete({"name":name}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json({error:error})
    })
}

module.exports={addemployee,getemployee,removeemployee,updateemployee}








