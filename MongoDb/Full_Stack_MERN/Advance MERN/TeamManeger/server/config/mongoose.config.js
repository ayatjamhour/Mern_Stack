

const mongoose = require('mongoose');
const dbName = "players-db";


mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the "${dbName}" database`))
    .catch(err => console.log(`Something went wrong when connecting to the  "${dbName}" database`, err));
    const mongoose = require('mongoose');


//     const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/teammanagerdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecing to the database", err));
