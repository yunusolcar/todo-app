const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    board: {
        id: Object,
        name: String,
    },
    name: {
        type: String,
        required: true,
    },
    // manager: {
    //     type: String, // board owner default değer olucak
    // },
    // tasks: [
    //     {
    //         taskName: String,
    //     },
    // ],
    members: [
        {
            name: String,
            mail: String,
        },
    ],
    slug: {
        type: String,
        unique: true,
    },
});

listSchema.pre("validate", function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});

const List = mongoose.model("List", listSchema);
module.exports = List;
