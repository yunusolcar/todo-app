const express = require("express");
const pageController = require("../controllers/pageControllers");

const router = express.Router();

router.route("/").get(pageController.getIndex);
router.route("/register").get(pageController.getRegister);
router.route("/login").get(pageController.getLogin);

module.exports = router;