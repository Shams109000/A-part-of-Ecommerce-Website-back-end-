const express=require('express')
const router=express.Router()
const { createProduct, getAllProduct, getProduct, editProduct, deleteProduct, filterProduct } = require('../controller/product');

router.get('/',getAllProduct)
// get single product route
.get('/:id',getProduct)
// create product route
.post('/',createProduct)

// edit product route
.patch('/:id',editProduct)
// delete product route
.delete('/:id',deleteProduct)
exports.router=router