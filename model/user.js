const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  username: { type: String, required: true },
  token:String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true,'email already exists'],
    validate: {
      validator: function (v) {
        // Regular expression for validating an email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  role:{type:String,required:true,default:"user"},
  token:String,
  orders:{type:[mongoose.Schema.Types.mixed]},
  address:{type:[mongoose.Schema.Types.mixed]},

  password: { type: String,  required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
