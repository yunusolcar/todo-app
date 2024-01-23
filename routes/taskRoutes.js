const express = require("express");
const taskController = require("../controllers/taskControllers");

const router = express.Router();

router.route("/:slug").post(taskController.createTask);

module.exports = router;
