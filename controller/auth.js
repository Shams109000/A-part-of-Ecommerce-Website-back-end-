const User = require("../model/user");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const SALT_WORK_FACTOR = 10;
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const { log } = require("console");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../private.key'),
  'utf-8'
)

exports.createUser = async (req, res) => {
    console.log(req.body, "r");
    try {
      const doc=await User.findOne({email:req.body.email})
      console.log(doc,'d');
      if(doc){
        res.status(300).json({message:"email already exist!"})
      }
      else{
        const user = new User(req.body);
        var token = jwt.sign({ email: req.body.email }, privateKey, {
          algorithm: 'RS256',
        });
        if(req.body.password.length>=6){
          const hash = bcrypt.hashSync(req.body.password, SALT_WORK_FACTOR);
          user.password = hash;
          user.token = token;
          await user.save();
          res.status(201).json({ message: "User registered successfully", user });
        }
        else{
          res.status(300).json({ message: "atleast 6 characters erquired" });
        }
   
      }
  
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
exports.verifyUser = async (req, res) => {
    console.log(req.body, "r");
    try {
      const user =await User.findOne({email:req.body.email});
      if(!user){
        res.status(404).json({ message: "User not found" });
        return;
      }
      const isAuth = bcrypt.compareSync(req.body.password, user.password);
      if (isAuth) {
        var token = jwt.sign({ email: req.body.email }, privateKey, {
          algorithm: 'RS256',
        });
        user.token = token;
       await user.save()
       res.status(200).json({ message: "login successfully",user:user });

        
      }
      else{
        res.status(300).json({ message: "wrong password!!" });

      }
    } catch (err) {
      console.error("Error  login:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
  
 
