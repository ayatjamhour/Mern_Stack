const express = require("express");
// const mongoose = require('mongoose');
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

// mongoose.connect('mongodb://localhost/name_of_your_DB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Established a connection to the database'))
//     .catch(err => console.log('Something went wrong when connecting to the database ', err));
/////// const mongoose = require('mongoose');
 
// const UserSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
 
// const User = mongoose.model('User', UserSchema);
 
// module.exports = User;
