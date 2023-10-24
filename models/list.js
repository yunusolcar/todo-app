const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
     name: {
          type: String,
          unique: true,
          required: true,
     },
     owners: {
          type: String,
          unique: true,
          required: true,
     }
});

const List = mongoose.model("List", listSchema);
module.exports = List;