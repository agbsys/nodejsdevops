const express = require("express");
const router = express.Router();
const apiProductController = require("../controller/api_products");

router.get('/', apiProductController.getProducts);
router.get('/:_id', apiProductController.findProduct);
router.post('/', apiProductController.addProduct);
router.put('/', apiProductController.updateProduct);
router.delete('/', apiProductController.deleteProduct);

module.exports = router;
