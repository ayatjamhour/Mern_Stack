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
module.exports.createProduct = (request, response) => { //create new
    const { title, price, description } = request.body;
    Product.create({
        title, price, description
    })
        // .then(product => response.json(product))
        .then(newlyCreatedProduct => res.json({ user: newlyCreatedProduct }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.getProduct = (request, response) => { //find single
    Person.findOne({ _id: request.params.id })
        .then(product => response.json(product))

        .catch(err => response.json(err))
}
module.exports.findAllProduct = (request, response) => {
    Person.find()
        .then(Allproduct => response.json({ product: Allproduct }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}
module.exports.updateProduct = (request, response) => {
    Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(UpdateProduct => response.json({ product: UpdateProduct }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}
module.exports.DeleteProduct = (request, response) => {
    Person.deleteOne({ _id: req.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}

