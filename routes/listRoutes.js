const express = require("express");
const listController = require("../controllers/listController");

const router = express.Router();

router.route("/:slug").post(listController.createList);

module.exports = router;
