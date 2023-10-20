const Task = require("../models/task");

exports.postCreateTask = async (req, res) => {
     try {
          const task = await Task.create(req.body);
          res.status(201).json({
               status: 'success',
               task
          });

     } catch (error) {
          res.status(400).json({
               status: 'fail',
               error
          });
     }
}

exports.getAllTasks = async (req, res) => {
     try {
          const tasks = await Task.find();
          res.status(200).json({
               status: 'success',
               tasks
          })
     } catch (error) {
          res.status(400).json({
               status: "failed",
               error
          });
     }
}