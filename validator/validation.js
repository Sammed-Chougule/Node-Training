const {body} = require("express-validator")

//validation required for correct input
const validation=[
    body("name").isString().withMessage("name must be valid"),
    body("lang").isString().withMessage("lang must be valid"),
    body("age").isNumeric().withMessage("age must be valid number"),
  ]
const loginValidation=[
  body("name").isString().withMessage("name must be valid")
]

function authToken(req,res,next){
  const authHeader =req.headers["authorization"]
  const token =authHeader && authHeader.split(" ")[1]
  if(token ==null) return res.sendstatus(401)

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.sendstatus(403)
    req.user=user
    next()
  })
}


  module.exports ={validation,loginValidation,authToken}

