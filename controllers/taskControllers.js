const Task = require("../models/task");
const ash = require("express-async-handler");

exports.postCreateTask = ash(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
        status: "success",
        task,
    });
});

exports.getAllTasks = ash(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({
        status: "success",
        tasks,
    });
});
