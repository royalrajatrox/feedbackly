const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const { Schema } = mongoose;
// this is destructuring

const recipientSchema = new Schema({
   email: String,
   responded: { type: Boolean, default: false}

});



module.exports = recipientSchema;
