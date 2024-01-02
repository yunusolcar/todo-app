const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/todo-db")
    .then(() => console.log("Database connection successful"))
    .catch((error) => console.error(error));

module.exports = mongoose;
