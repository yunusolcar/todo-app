const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    list: {
        id: Object,
        name: String,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: false,
    },
    owner: {
        id: Object,
        name: String,
        mail: String,
    },
    members: [
        {
            name: String,
            mail: String,
        },
    ],
    status: {
        type: Number,
        enum: [0, 1, 2], //0: Not Started        1: In Progress       2: Completed
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    completedAt: {
        type: Date,
    },
    slug: {
        type: String,
        unique: true,
    },
});

taskSchema.pre("validate", function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;