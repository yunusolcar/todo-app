const express = require("express");
const userController = require("../controllers/userControllers");
const authenticationMiddleware = require("../middlewares/authentication");
const router = express.Router();

router.route("/signup").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").get(userController.logoutUser);
router.route("/profile").get(authenticationMiddleware, userController.getProfile);

module.exports = router;
