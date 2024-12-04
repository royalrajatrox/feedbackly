const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const RecipientSchema = require('./Recipient');
const { Schema } = mongoose;
// this is destructuring

const surveySchema = new Schema({
   title: String,
   body: String,
   subject: String,
   recipients: [RecipientSchema] ,   //using sub document collection
   yes: { type: Number, default: 0},
   no: { type: Number, default: 0}


});



mongoose.model('surveys', surveySchema);
