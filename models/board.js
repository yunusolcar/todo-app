const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
     name: {
          type: String,
          unique: true,
          required: true
     },
     createdAt: {
          type: Date,
          default: Date.now
     },
     boardDescription: {
          type: String,
          required: false,
          trim: true
     },
     boardMembers: {
          type: String,
          required: true
     },
     boardOwners: {
          type: String,
          required: true
     }
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;