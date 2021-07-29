// const person = require("../models/person.model");

// module.exports.index = (request, response) => {
//   response.json({
//     message: "Hello World"
//   });
// }
const Product = require("../models/product.model");
module.exports.index = (request, response) => {
    response.json({
        message: "Create Product"
    });
}
// The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title, price, description
    })
        // .then(product => response.json(product))
        .then(newlyCreatedProduct => res.json({ user: newlyCreatedProduct }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}