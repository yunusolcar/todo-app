const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    task: {
        id: Object,
        name: String,
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
            mail: String,
        },
    ],
    owner: {
        id: Object,
        name: String,
        mail: String,
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
