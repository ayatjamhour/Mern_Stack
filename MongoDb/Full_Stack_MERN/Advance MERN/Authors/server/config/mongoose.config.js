// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/name_of_your_DB", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
// 	.then(() => console.log("Established a connection to the database"))
// 	.catch(err => console.log("Something went wrong when connecting to the database", err));
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/ProductSchema", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

const mongoose = require('mongoose');
const dbName = "authors-db";


mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the "${dbName}" database`))
    .catch(err => console.log(`Something went wrong when connecting to the  "${dbName}" database`, err));
