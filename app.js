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
const  path  = require("path");
const res = require("express/lib/response");
const app = require("express")();
// const port = 3000;
app.use(express.json());
app.use("/",require(path.join(__dirname,"routes/route.js")))
app.use(express.static(path.join(__dirname,"public")))
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on ${port}...`));
