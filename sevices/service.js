const logger = require("../logger/logger");
const employee = require("../models/employeemodel");
const {genrateToken}= require("../auth/generateToken")

//service function for adding data to database
const add = async (name, lang, age, req, res) => {
  const new1 = employee
    .create({
      name,
      lang,
      age,
    })
    .then((new1) => {
      logger.info(`new employee added :${name}`)
      res.json(new1).status(201);
    })
    .catch((error) => {
      logger.error(`error occured while adding data :${error}`)
      res.json({ error: error });
    });
};

//service function for getting data to database
const get = async (req, res) => {
  const data = employee
    .find({})
    .then((data) => {
      logger.info(`getting employee data`)
      res.json(data).status(200);
    })
    .catch((error) => {
      logger.error(`error occured while adding data :${error}`)
      res.json({ error: error }).status(400);
    });
};

//service function for updating data to database
const update = async (name, lang, age, req, res) => {
  const data = employee
    .findOneAndUpdate({ name: name }, { name: name, lang: lang, age: age })
    .then((data) => {
      logger.info(`updated employee data of  :${name}`)
      res.json(data).status(200);
    })
    .catch((error) => {
      logger.error(`error occured while adding data :${error}`)
      res.json({ error: error }).status(400);
    });
};

//service function for removing data to database
const remove = async (name, req, res) => {
  const data = employee
    .findOneAndDelete({ name: name })
    .then((data) => {
      logger.info(`removed employee data of :${name}`)
      res.json(data).status(200);
    })
    .catch((error) => {
      logger.error(`error occured while adding data :${error}`)
      res.json({ error: error }).status(400);
    });
};

  const login = async (name, req, res) => {
      const userData=await employee.find({name})
      .then(async (new1) => {
        logger.info(`login completed succesfully :${name}`)

        res.json({
          name:new1.name,
          accesToken:await genrateToken(new1.name)
        }).status(201);
      })
      .catch((error) => {
        logger.error(`error occured while adding data :${error}`)
        res.json({ error: error });
      });
  };



//exporting module to get used in controller
module.exports = { add, get, update, remove,login };
