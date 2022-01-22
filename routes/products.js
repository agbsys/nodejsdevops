const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router.get('/', productController.getProducts);
router.get('/add', productController.getAddForm);
router.post('/add', productController.addProduct);
router.get('/update/:_id', productController.getUpdateForm);
router.post('/save', productController.updateProduct);

router.get('/delete/:_id', productController.deleteProduct);


module.exports = router;
