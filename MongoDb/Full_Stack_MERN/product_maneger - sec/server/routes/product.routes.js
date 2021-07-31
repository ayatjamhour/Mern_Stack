
// const PersonController = require('../controllers/person.controller');
// module.exports = function (app) {
//   app.get('/api', PersonController.index);
// }

// const ProductController = require("../controllers/product.controller");

// module.exports = function (app) {
//     app.get('/api', ProductController.index);
//     app.post('/api/product', ProductController.createProduct);
//     app.get('/api/product/:id', ProductController.getProduct);
//     app.put("/api/product/update/:id", ProductController.updategProduct);
//     // app.post("/api/product/new", ProductController.createNewProduct);
//     app.delete("/api/product/delete/:id", ProductController.deleteProduct);
// };
const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    // get all products
    app.get("/api/product", ProductController.getAllProducts);
    // get one product
    // create a param variable called "id"
    app.get("/api/product/:id", ProductController.getOneProduct);
    // create product
    app.post("/api/product", ProductController.createProduct);
    // update product
    // put and patch are all used for updating
    app.put("/api/product/:id", ProductController.updateProduct);
    // delete product
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}