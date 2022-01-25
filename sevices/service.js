const employee=require("../models/employeemodel")

//service function for adding data to database
const add = async(name,lang,age,req,res)=>{
const new1 = employee.create({
    name,lang,age
}).then((new1)=>{
    res.json(new1).status(201)
}).catch((error)=>{
    res.json({error:error}).status(400)
})
}


//service function for getting data to database
const get =async(req,res)=>{
    const data = employee.find({}).then((data)=>{
        res.json(data).status(200);
    }).catch((error)=>{
        res.json({error:error}).status(400);
    })
}


//service function for updating data to database
const update = async(name,lang,age,req,res)=>{
    const data =employee.findOneAndUpdate({"name":name},{"name":name,"lang":lang,"age":age}).then((data)=>{
        res.json(data).status(200);
    }).catch((error)=>{
        res.json({error:error}).status(400);
    })
}


//service function for removing data to database
const remove =async(name,req,res)=>{
    const data =employee.findOneAndDelete({"name":name}).then((data)=>{
        res.json(data).status(200);
    }).catch((error)=>{
        res.json({error:error}).status(400)
    })
}

//exporting module to get used in controller
module.exports={add,get,update,remove}
