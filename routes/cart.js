const express=require('express')
const { addToCart,getCartItem } = require('../controller/cart')
const router=express.Router()



router
.get('/',getCartItem)
.post('/',addToCart)


exports.router=router