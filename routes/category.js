const express=require('express')
const { getAllCategory, createCategory } = require('../controller/category')
const router=express.Router()



router
.get('/',getAllCategory)
.post('/',createCategory)


exports.router=router
