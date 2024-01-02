const express = require("express");
const taskController = require("../controllers/pageControllers");

const router = express.Router();
router.route("/").get(taskController.getIndexPage);

module.exports = router;
