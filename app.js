const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose")
const logger =require("./logger/logger");

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("connected"))


const path = require("path");
const app = require("express")();
// const port = 3000;
app.use(express.json());
app.use("/", require(path.join(__dirname, "routes/route.js")));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`listening on ${port}...`));

