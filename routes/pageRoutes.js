const express = require("express");
const taskController = require("../controllers/pageControllers");
const pageController = require("../controllers/pageControllers");

const router = express.Router();
router.route("/").get(taskController.getIndex);
router.route("/register").get(pageController.getRegister);

module.exports = router;