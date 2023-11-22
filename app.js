const express = require('express');
const ejs = require("ejs");
const session = require("express-session");
const mongoConnect = require("connect-mongo");
const mongoose = require('mongoose');
const taskControllers = require("./controllers/taskControllers");
const taskRoutes = require("./routes/taskRoutes");
const pageRoutes = require("./routes/pageRoutes");
const userRoutes = require("./routes/userRoutes");
const db = require("./data/db");

const app = express();

//Global Variable
global.currentUserID = null;

//Template Engines
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({
     extended: true
}));
app.use(session({
     secret: 'cat tom',
     resave: false,
     saveUninitialized: true
}))

//Routes
app.use('/', pageRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('*', (req, res, next) => {
     currentUserID = req.session.userId;
     next();
});

//Port
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));