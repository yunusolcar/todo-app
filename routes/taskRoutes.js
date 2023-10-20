const express = require("express");
const taskController = require("../controllers/taskControllers");

const router = express.Router();

router.route("/").post(taskController.postCreateTask);
router.route("/").get(taskController.getAllTasks);

module.exports = router;