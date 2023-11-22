const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.route("/signup").post(userController.createUser);
router.route("/login").post(userController.loginUser);
module.exports = router;