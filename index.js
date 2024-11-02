const express=require('express')
const app=express()
const mongoose = require('mongoose');
const Product = require('./model/Product');
const productRouter=require('./routes/product')
const categoryRouter=require('./routes/category')
const brandRouter=require('./routes/brand')
const userRouter=require('./routes/auth')
const cartRouter=require('./routes/cart')

var cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/flipkart', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors())
app.use(express.json())
app.use('/products',productRouter.router)
app.use('/category',categoryRouter.router)
app.use('/brand',brandRouter.router)
app.use('/auth',userRouter.router)
app.use('/cart',cartRouter.router)

app.get('/',(req,res)=>{
    res.send("root")
})



app.listen(8080,()=>{
    console.log("server is listening on8080");
})

