const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const { Schema } = mongoose;
// this is destructuring

const userSchema = new schema({
   googleId: String
});



mongoose.model('users', userSchema);
