const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    menager: {
        type: String, // buraya list name ve task gelicek
    },
    tasks: [
        {
            taskName: String,
        },
    ],
});

const List = mongoose.model("List", listSchema);
module.exports = List;
