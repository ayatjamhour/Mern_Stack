// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;
//	title: { type: String },
//price: { type: Number },
//description: { type: String }
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, "title cannot be emtpy"],
		minlength: [3, "The min length should be more than 6"]
	},
	price: {
		type: Number,
		required: [true, "price cannot be emtpy"],
		min: [5, "price should be more than 5"]
	},
	description: {
		type: String,
		required: [true, "desc cannot be emtpy"],
		minlength: [3, "The min length should be more than 3"]
	}
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;