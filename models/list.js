const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    manager: {
        type: String, // board owner default değer olucak
    },
    tasks: [
        {
            taskName: String,
        },
    ],
});

const List = mongoose.model("List", listSchema);
module.exports = List;