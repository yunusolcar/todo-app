const Task = require("../models/task");
const User = require("../models/user");
const Board = require("../models/board");
const List = require("../models/list");

exports.createList = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID);
        const board = await Board.find({ "owner.id": user._id, slug: req.params.slug });
        await List.create({
            name: req.body.name,
            members: req.body.members,
            board: {
                id: board[0]._id,
                name: board[0].name,
            },
        });
        res.status(201).redirect(`/boards/${req.params.slug}`);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
};
