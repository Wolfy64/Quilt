const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  googleId: String,
  username: String,
  email: String,
  facebookId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
