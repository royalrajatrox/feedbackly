const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const { Schema } = mongoose;
// this is destructuring

const userSchema = new Schema({
   googleId: String
});



mongoose.model('users', userSchema);
