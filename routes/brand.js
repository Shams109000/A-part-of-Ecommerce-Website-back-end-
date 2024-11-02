const express=require('express')
const { getAllBrand, createBrand } = require('../controller/brand')
const router=express.Router()



router
.get('/',getAllBrand)
.post('/',createBrand)


exports.router=router
