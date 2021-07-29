// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;
const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);