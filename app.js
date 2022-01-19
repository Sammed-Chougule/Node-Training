// // console.log("hello world");

const express = require("express");
const req = require("express/lib/request");

// // const path = require("path");

// // const samm = path.parse(__filename);
// // console.log(samm);

// // const os = require("os");
// // const sam1 = os.uptime();
// // console.log(sam1);

// const eventemitter =require('events');
// const emitter = new eventemitter();

// emitter.on('messageload',function(){
//     console.log("emiiter called")
// });
// emitter.on('test',function(){
//     console.log("test function called")
// });

// emitter.emit('messageload')
// emitter.emit('test')


const dotenv =require("dotenv");
const joi1 = require("joi");
const app = require("express")();
// const port = 3000;
app.use(express.json());
dotenv.config();

const language = [
  { id: 1, name: "c" },
  { id: 2, name: "c++" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "Python" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api", (req, res) => {
  res.send(language);
});

app.post("/api/language", (req, res) => {
  if (!req.body.name || req.body.name.length < 4) {
    res.status(400).send("Bad request");
    return;
  }
  const lang = {
    id: language.length + 1,
    name: req.body.name,
  };
  language.push(lang);
  res.send(lang);
});

app.put("/api/language/:id", (req, res) => {
  const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);

  if (!req.body.name || req.body.name.length < 4) {
    res.status(400).send("Bad request");
    return;
  }
  lang.name =req.body.name;
  res.send(course);
});

app.delete("/api/language/:id", (req, res) =>{
    const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);
  
  const index =language.indexOf(lang);
  language.splice(index,1);
  res.send(course);
})

app.get("/api/language/:id", (req, res) => {
  const lang = language.find((c) => c.id === parseInt(req.params.id));
  if (!lang) res.status(404).send("language with given id  not found");
  res.send(lang);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on ${port}...`));
