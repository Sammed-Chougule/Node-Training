const {body} = require("express-validator")

//validation required for correct input
const validation=[
    body("name").isString().withMessage("name must be valid"),
    body("lang").isString().withMessage("lang must be valid"),
    body("age").isNumeric().withMessage("age must be valid"),
  ]

  module.exports ={validation}

