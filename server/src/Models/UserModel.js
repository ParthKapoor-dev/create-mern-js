const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User

