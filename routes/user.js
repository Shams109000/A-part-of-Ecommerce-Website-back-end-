const express=require('express')
const { fetchUserById,updateUser } = require('../controller/user')
const router=express.Router()

router
.post('/signup',fetchUserById)
.post('/login',updateUser)
exports.router=router
