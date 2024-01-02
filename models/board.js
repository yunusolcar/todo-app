const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    boardDescription: {
        type: String,
        required: false,
        trim: true,
    },
    members: [
        {
            name: String,
            email: String,
        },
    ],
    manager: {
        name: String,
    },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
