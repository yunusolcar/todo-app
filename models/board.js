const mongoose = require("mongoose");
const slugify = require("slugify");
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
    owner: {
        name: String,
    },
    slug: {
        type: String,
        unique: true,
    },
});

boardSchema.pre("validate", function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;