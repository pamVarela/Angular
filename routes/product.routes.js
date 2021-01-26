module.exports = app => {
    
    const products = require('../controllers/product.controller');
    var router = require('express').Router();

    router.post('/add', products.create);
    router.get('/getAll', products.findAllProducts);
    router.put('/:id', products.update);
    router.delete('/:id', products.delete);

    app.use('/api/products', router);

};