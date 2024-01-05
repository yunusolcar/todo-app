const express = require("express");
const boardController = require("../controllers/boardControllers");
const authenticationMiddleware = require("../middlewares/authentication");

const router = express.Router();

router.route("/").post(boardController.createBoard);
router.route("/").get(authenticationMiddleware, boardController.getAllBoards);
router.route("/:slug").get(boardController.singleBoard);

module.exports = router;
