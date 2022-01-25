const express = require("express");
const path = require("path");
const router = express.Router();
const {
  addEmployee,
  getEmployee,
  removeEmployee,
  updateEmployee,
} = require("../controller/employeecontroller");


module.exports = router;
const mongoose = require("mongoose");
const { route } = require("express/lib/application");
const { body, validationResult } = require("express-validator");
const { validation } = require("../validator/validation");


router.post("/employee/add", validation, addEmployee);

router.get("/employee", getEmployee);

router.delete("/employee/remove", removeEmployee);

router.put("/employee/update", validation, updateEmployee);





























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
