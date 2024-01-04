const Board = require("../models/board");
const Task = require("../models/task");

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
        const boards = await Board.find().sort("-createdAt");
        const tasks = await Task.find();
        res.status(200).render("boards", {
            boards,
            tasks,
            pageName: "boards",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error,
        });
    }
};

exports.singleBoard = async (req, res) => {
    try {
        const board = await Board.findOne({
            slug: req.params.slug,
        });
        res.status(200).render("board", {
            board,
            pageName: "board",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};
