
const mongoose = require("mongoose");
const { Schema } = mongoose;

// A scshema tells how u want the document to look like
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
