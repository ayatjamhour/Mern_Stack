
// const PersonController = require('../controllers/person.controller');
// module.exports = function (app) {
//   app.get('/api', PersonController.index);
// }

const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put("/api/product/update/:id", ProductController.updategProduct);
    // app.post("/api/product/new", ProductController.createNewProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);

};