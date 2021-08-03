const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [ true, "Name is required "],
        minlength: [2, "Name must be more than 3 characters long"],
    },
},{timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);