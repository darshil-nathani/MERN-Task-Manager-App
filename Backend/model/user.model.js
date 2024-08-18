const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: "client",
    },
  });

module.exports = mongoose.model("user", userSchema);
