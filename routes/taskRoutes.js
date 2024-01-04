const express = require("express");
const taskController = require("../controllers/taskControllers");
const authenticationMiddleware = require("../middlewares/authentication");

const router = express.Router();

router.route("/").post(taskController.postCreateTask);
router.route("/").get(authenticationMiddleware, taskController.getAllTasks);

module.exports = router;
