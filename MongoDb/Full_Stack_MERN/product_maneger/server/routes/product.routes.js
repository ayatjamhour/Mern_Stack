
// const PersonController = require('../controllers/person.controller');
// module.exports = function (app) {
//   app.get('/api', PersonController.index);
// }

const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
};