const Board = require("../models/board");
const Task = require("../models/task");
const User = require("../models/user");
const List = require("../models/list");

exports.createBoard = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        await Board.create({
            name: req.body.name,
            boardDescription: req.body.boardDescription,
            members: req.body.members,
            owner: {
                id: user._id,
                name: user.name,
                mail: user.mail,
            },
        });
        res.status(201).redirect("/boards");
    } catch (error) {
        res.status(400).redirect("/");
    }
};

exports.getAllBoards = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const boards = await Board.find({ "owner.id": user._id }).sort("-createdAt");
        res.status(200).render("boards", {
            user,
            boards,
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
        const board = await Board.find({ "owner.mail": user.mail, slug: req.params.slug });
        const list = await List.find({ "board.id": board[0]._id });
        const tasks = await Task.find({ "tasks.id": list._id });
        res.status(200).render("board", {
            board,
            list,
            user,
            tasks,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};
