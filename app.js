const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/training").then(()=>console.log("connected"))
const dotenv = require("dotenv");
const path = require("path");
const app = require("express")();
// const port = 3000;
app.use(express.json());
app.use("/", require(path.join(__dirname, "routes/route.js")));
app.use(express.static(path.join(__dirname, "public")));
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on ${port}...`));
