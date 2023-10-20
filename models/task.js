const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
     name: {
          type: String,
          unique: true,
          required: true
     },
     description: {
          type: String,
          trim: true,
          required: false
     },
     completed: {
          type: Boolean,
          required: true
     },
     createdAt: {
          type: Date,
          default: Date.now,
     }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;