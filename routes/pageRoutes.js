const express = require("express");
const pageController = require("../controllers/pageControllers");
const redirectMiddleware = require("../middlewares/redirect");
const router = express.Router();

router.route("/").get(pageController.getIndex);
router.route("/register").get(redirectMiddleware, pageController.getRegister);
router.route("/login").get(redirectMiddleware, pageController.getLogin);

module.exports = router;