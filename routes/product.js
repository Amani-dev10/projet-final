const express = require('express');
const { addProducts, getProducts, getOneProduct, editProduct, deleteProduct } = require("../controllers/product.controller");
const router = express.Router();



router.post('/add_products',addProducts);
router.get('/get_products', getProducts);
router.get('/get_product/:id',getOneProduct);
router.put('/edit_product/:id',editProduct);
router.delete('/delete_product/:id',deleteProduct)



module.exports = router;