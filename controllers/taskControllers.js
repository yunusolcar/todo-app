const Task = require("../models/task");
const User = require("../models/user");
const Board = require("../models/board");

exports.createTask = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const board = await Board.find({ "owner.id": user._id, slug: req.params.slug });
        await Task.create({
            name: req.body.name,
            description: req.body.description,
            members: req.body.members,
            status: req.body.status,
            owner: {
                id: user._id,
                name: user.name,
                mail: user.mail,
            },
            board: {
                id: board[0]._id,
                name: board[0].name,
            },
        });
        res.status(201).redirect("/boards");
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};