const mongoose = require("mongoose");
// _id: Number,
const JokeSchema = new mongoose.Schema({

	setup: String,
	punchline: String

});

const Joke = mongoose.model("Joke", JokeSchema); //schema = collection name

module.exports = Joke;