const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
     name: {
          type: String,
          unique: true,
          required: true,
     },
     description: {
          type: String,
          trim: true,
          required: false
     },
     members: [{
          name: String,
          email: String
     }],
     status: {
          type: Number,
          enum: [0, 1, 2], //0: New        1: In Progress       2: Completed
          required: true
     },
     createdAt: {
          type: Date,
          default: Date.now,
     },
     completedAt: {
          type: Date
     }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;