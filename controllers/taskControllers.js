const Task = require("../models/task");

exports.createTask = async (req, res) => {
    try {
        await Task.create({
            name: req.body.name,
            description: req.body.description,
            members: req.body.members,
            status: req.body.status,
        });
        res.status(201).redirect("/boards");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.status(200).render("boards", {
            allTasks,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error,
        });
    }
};
