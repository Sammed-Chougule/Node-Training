const employee = require("../models/employeemodel");
const service = require("../sevices/service");
const { validationResult } = require("express-validator");
const logger = require("../logger/logger");
const jwt = require("jsonwebtoken");


//adding employeedata from database
const addEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (errors.errors.length !== 0) {
    res.json(errors.errors);
    logger.error(
      `error occured while adding data:${JSON.stringify(errors.errors)}`
    );
  } else {
    const { name, lang, age } = req.body;
    service.add(name, lang, age, req, res);
  }
};

// getting employeedata from database
const getEmployee = async (req, res) => {
  service.get(req, res);
};

//updating employeedata from database
const updateEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (errors.errors.length !== 0) {
    res.json(errors.errors);
    logger.error(
      `error occured while adding data:${JSON.stringify(errors.errors)}`
    );
  } else {
    const { name, lang, age } = req.body;
    service.update(name, lang, age, req, res);
  }
};

//removing employeedata from database
const removeEmployee = async (req, res) => {
  const { name } = req.body;
  service.remove(req, res);
};

const loginemployee = async(req,res)=>{
  const errors = validationResult(req);
  if (errors.errors.length !== 0) {
    res.json(errors.errors);
    logger.error(
      `error occured while adding data:${JSON.stringify(errors.errors)}`
    );
  } else {
    const { name } = req.body;
    service.login(name, req, res);
  }  

}
module.exports = { addEmployee, getEmployee, removeEmployee, updateEmployee, loginemployee };
