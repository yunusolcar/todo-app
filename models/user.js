const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     surname: {
          type: String,
          required: true
     },
     mail: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true
     },
     isActive: {
          type: Boolean,
          required: true,
          default: false
     }
});

const User = mongoose.model('User', userSchema);
module.exports = User;