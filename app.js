const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const pageRoutes = require("./routes/pageRoutes");
require("./data/db");

const app = express();

//Template Engines
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Routes
app.use("/", pageRoutes);
app.use("/tasks", taskRoutes);

//Port
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
