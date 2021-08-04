
const express = require("express");
const faker = require('faker');
const app = express();


class User {
    constructor() {

        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
    ///////////////////////////////////////
    //convert it to array "delete , splice"
    ///////////////////////////////////////
    // const users = [_id = faker.random.number(),
    // firstName = faker.name.firstName(),
    // lastName = faker.name.lastName(),
    // phoneNumber = faker.phone.phoneNumber(),
    // email = faker.internet.email(),
    // password = faker.internet.password()]
}

const newUser = new User();
console.log(newUser);

class Address {
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newAddress = new Address();
console.log(newAddress);
class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = newAddress;
    }
}

const newCompany = new Company();
console.log(newCompany);



console.log(newCompany);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/api/users/:id", (req, res) =>
    res.send(`${newUser.firstName}`));

app.get("/api/:users", (req, res) =>

    res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`));

app.get("/api/:companies/:name", (req, res) =>

    res.send(`Company name: ${newCompany.name}`));

app.get("/api/:user/:company/:info/:extra", (req, res) =>

    res.send(`User First Name: ${newUser.firstName};  Company name: ${newCompany.name}`));

// app.listen( 8000, () => console.log(`Listening on port: ${port}`) );
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
/////////////////////////////////////////
//my first solution
////////////////////////////////////////
// app.get("/api/:users/:new", (req, res) => {
//     if (req.params.users === "users") {
//         res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`);
//     }
//     if (req.params.users === "companies") {
//         res.send(`Company name: ${newCompany.name}`);
//     }
//     if (req.params.users === "user" && req.params.new === "company") {
//         res.send(`User First Name: ${newUser.firstName};  Company name: ${newCompany.name}`);
//     }
// });
/////////////////////////////////////////////////
//my second solution , try to use a delete request
/////////////////////////////////////////////////
// app.get("/api/users", (req, res) => 
//     res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`
// ));

// app.delete("/api/users", (req, res) => {
//     users.splice(req.params.firstName, 1);
//     // we always need to respond with something
//     res.json({ status: "ok" });
    // assuming this id is the index of the users array we can remove the user like so

    //     res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`
    // ));
