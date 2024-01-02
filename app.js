const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const taskRoutes = require('./routes/taskRoutes');
const pageRoutes = require('./routes/pageRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoStore = require('./db');
const settings = require('./settings');

const app = express();

//Template Engines
app.set("view engine", "ejs");

//Global Variable
global.userIn = null;

//Middlewares
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({
     extended: true
}));
app.use(session({
     secret: settings.sessionSecret,
     resave: false,
     saveUninitialized: false,
     store: mongoStore.mongoStoreCon
}));


//Routes
app.use('*', (req, res, next) => {
     userIn = req.session.userId;
     next();
});
app.use('/', pageRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

//Port
const port = settings.port;
app.listen(port, () => console.log(`TO-DO App working`));