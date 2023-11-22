const express = require("express");
const taskController = require("../controllers/pageControllers");
const pageController = require("../controllers/pageControllers");

const router = express.Router();
router.route("/").get(taskController.getIndex);
router.route("/register").get(pageController.getRegister);
router.route("/login").get(pageController.getLogin);

module.exports = router;