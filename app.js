const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const taskRoutes = require("./routes/taskRoutes");
const pageRoutes = require("./routes/pageRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

//Db
mongoose.connect('mongodb://127.0.0.1:27017/todo-db')
     .then(() => {
          console.log('DB Connected')
     });

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
     secret: 'cat_tom',
     resave: false,
     saveUninitialized: false,
     store: MongoStore.create({
          mongoUrl: 'mongodb://127.0.0.1:27017/todo-db'
     })
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
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));