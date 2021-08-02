const Product = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    console.log('"im herere"');
    Product.create(req.body)
        .then((newProduct) => {

            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then((oneProduct) => {
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,

        runValidators: true

    })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};
////////////////////////////////////////////////////////////////////////////////////


// const Product = require('../models/product.model');

// // get all Products
// module.exports.getAllProducts = (req, res) => {
//     console.log("getAllProducts");

//     Product.find({})  // find all movie documents
//         .then((allProducts) => {
//             console.log(allProducts);
//             res.json(allProducts);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// };
// // get one Product
// module.exports.getOneProduct = (req, res) => {
//     console.log("getOneProduct");
//     console.log(req.params.id);

//     Product.findById(req.params.id)
//         .then((oneProduct) => {
//             console.log(oneProduct);
//             res.json(oneProduct);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// };

// // create Product
// module.exports.createProduct = (req, res) => {
//     console.log("createProduct");
//     console.log(req.body);

//     Product.create(req.body)
//         .then((newProduct) => {
//             console.log(newProduct);
//             res.json(newProduct);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// }
// // update Product
// module.exports.updateProduct = (req, res) => {
//     console.log("updateProduct");
//     console.log(req.params.id);  // the document we need to update
//     console.log(req.body);       // the data we will be updating with

//     // update by default will send back the ORIGINAL document....NOT the updated one!
//     // Update will NOT validate your data by default
//     Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,    // return the updated document instead of the original
//         runValidators: true  // validate the json data just like the create
//     })
//         .then((updatedProduct) => {
//             console.log(updatedProduct);
//             res.json(updatedProduct);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// };
// // delete Product
// module.exports.deleteProduct = (req, res) => {
//     console.log("deleteProduct");
//     console.log(req.params.id);

//     Product.findByIdAndDelete(req.params.id)
//         .then((deletedProduct) => {
//             console.log(deletedProduct);
//             res.json(deletedProduct);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// };
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const person = require("../models/person.model");

// // module.exports.index = (request, response) => {
// //   response.json({
// //     message: "Hello World"
// //   });
// // }
// /////////////////////////////////////////////////
// // const Product = require("../models/product.model");
// // module.exports.index = (request, response) => {
// //     response.json({
// //         message: "Create Product"
// //     });
// // }
// // // The method below is new
// // module.exports.createProduct = (request, response) => { //create new
// //     const { title, price, description } = request.body;
// //     Product.create({
// //         title, price, description
// //     })
// //         // .then(product => response.json(product))
// //         .then(newlyCreatedProduct => res.json({ user: newlyCreatedProduct }))
// //         .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
// // }
// // module.exports.getProduct = (request, response) => { //find single
// //     Person.findOne({ _id: request.params.id })
// //         .then(product => response.json(product))

// //         .catch(err => response.json(err))
// // }
// // module.exports.findAllProduct = (request, response) => {
// //     Person.find()
// //         .then(Allproduct => response.json({ product: Allproduct }))
// //         .catch(err => response.json({ message: "Something went wrong", error: err }));
// // }
// // module.exports.updateProduct = (request, response) => {
// //     Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
// //         .then(UpdateProduct => response.json({ product: UpdateProduct }))
// //         .catch(err => response.json({ message: "Something went wrong", error: err }));
// // }
// // module.exports.DeleteProduct = (request, response) => {
// //     Person.deleteOne({ _id: req.params.id })
// //         .then(result => response.json({ result: result }))
// //         .catch(err => response.json({ message: "Something went wrong", error: err }));
// // }
