const express = require("express");
const path = require("path");
const router = express.Router();
const {
  addEmployee,
  getEmployee,
  removeEmployee,
  updateEmployee,
  loginemployee
} = require("../controller/employeecontroller");

module.exports = router;
const mongoose = require("mongoose");
const { route } = require("express/lib/application");
const { body, validationResult } = require("express-validator");
const { validation, loginValidation,authToken } = require("../validator/validation");

router.post("/employee/add", validation, addEmployee);

router.get("/employee",authToken,getEmployee);

router.delete("/employee/remove", removeEmployee);

router.put("/employee/update", validation, updateEmployee);

router.post("/login",loginValidation,loginemployee);
