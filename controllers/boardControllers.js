const Board = require("../models/board");
const Task = require("../models/task");
const User = require("../models/user");

exports.createBoard = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        await Board.create({
            name: req.body.name,
            boardDescription: req.body.boardDescription,
            members: req.body.members,
            owner: {
                name: user.name,
                mail: user.mail,
            },
        });
        res.status(201).redirect("/boards");
    } catch (error) {
        console.log(error);
        res.status(400).redirect("/");
    }
};

exports.getAllBoards = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const boards = await Board.find({ "owner.mail": user.mail }).sort("-createdAt");
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
        const tasks = await Task.find();
        const board = await Board.find({ "owner.mail": user.mail, slug: req.params.slug });
        res.status(200).render("board", {
            board,
            tasks,
            user,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};
