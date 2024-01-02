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

//Error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(400).json({
        status: "fail",
        error: error.message,
    });
});

//Port
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
