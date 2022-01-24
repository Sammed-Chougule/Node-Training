const express = require("express");
const path = require("path")
const router = express.Router();
const { addemployee,getemployee,removeemployee,updateemployee}= require("../controller/employeecontroller")
module.exports = router;
const mongoose = require("mongoose");
const { route } = require("express/lib/application");
const {body,validationResult}=require("express-validator")


// const language = [
//     { id: 1, name: "c" },
//     { id: 2, name: "c++" },
//     { id: 3, name: "Javascript" },
//     { id: 4, name: "Python" },
//   ];
// router.get("", (req, res) => {
//     res.send("welcome");
//   });

// router.get("/api",api );

// router.get("/api/language", (req, res) => {
//   res.sendFile(path.join(__dirname, "route.html"));
// });

router.post("/addemployee",[
  body("name").isString().withMessage("name must be valid")
  ,body("desg").isString().withMessage("desg must be valid")
  ,body("age").isNumeric().withMessage("age should be valid")
],addemployee);

router.get("/getemployee",getemployee);

router.delete("/removeemployee",removeemployee);

router.put("/updateemployee", [
  body("name").isString().withMessage("name must be valid")
  ,body("desg").isString().withMessage("desg must be valid")
  ,body("age").isNumeric().withMessage("age must be valid")
],updateemployee);

// router.delete("/api/language/:id", (req, res) => {
//   const lang = language.find((c) => c.id === parseInt(req.params.id));
//   if (!lang) res.status(404).send("language with given id  not found");
//   res.send(lang);

//   const index = language.indexOf(lang);
//   language.splice(index, 1);
//   res.send(course);
// });

// router.get("/api/language/:id", (req, res) => {
//   const lang = language.find((c) => c.id === parseInt(req.params.id));
//   if (!lang) res.status(404).send("language with given id  not found");
//   res.send(lang);
// });
