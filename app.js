const express = require('express');
const ejs = require("ejs");
const pageController = require("./controllers/pageControllers");

const app = express();

//Template Engines
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.get('/', pageController.getIndexPage);

//Port
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));