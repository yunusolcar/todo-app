const express = require('express');
const ejs = require("ejs");
const mongoose = require('mongoose');
const taskControllers = require("./controllers/taskControllers");
const taskRoutes = require("./routes/taskRoutes");
const pageRoutes = require("./routes/pageRoutes");
const db = require("./data/db");

const app = express();

//Template Engines
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({
     extended: true
}));

//Routes
app.use('/', pageRoutes);
app.use('/tasks', taskRoutes);

//Port
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));