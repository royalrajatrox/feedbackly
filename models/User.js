const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const { Schema } = mongoose;
// this is destructuring

const userSchema = new Schema({
   googleId: String,
   credits: {type: Number, default:0}
});



mongoose.model('users', userSchema);
