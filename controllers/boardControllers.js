const Board = require("../models/board");
const Task = require("../models/task");
const User = require("../models/user");
exports.createBoard = async (req, res) => {
    try {
        await Board.create({
            name: req.body.name,
            boardDescription: req.body.boardDescription,
            members: req.body.members,
            owner: req.body.userID,
        });
        res.status(201).redirect("/boards");
    } catch (error) {
        res.status(400).redirect("/");
    }
};

exports.getAllBoards = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const boards = await Board.find().sort("-createdAt");
        res.status(200).render("boards", {
            boards,
            user,
            pageName: "boards",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};

exports.singleBoard = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const tasks = await Task.find();
        const board = await Board.findOne({
            slug: req.params.slug,
        });
        res.status(200).render("board", {
            board,
            tasks,
            user,
            pageName: "board",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};
