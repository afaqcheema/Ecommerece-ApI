const express = require('express');
const router = express.Router();
const products = require ('../controller/products');

router.get('/', products.getMessages);
router.get('/:id', products.getMessage);
router.post('/', products.addMessage);
router.put('/:id', products.updateMessage);
router.delete('/:id', products.deleteMessage);

router.post('/signup', products.useradd);
router.post('/signin', products.userget);

router.get('/orders', products.orderget);


// router.post('/login', products.jwtPost);

module.exports = router;

