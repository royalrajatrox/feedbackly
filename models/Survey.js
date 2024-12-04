const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const { Schema } = mongoose;
// this is destructuring

const surveySchema = new Schema({
   title: String,
   body: String,
   subject: String,
   recipients: [String]


});



mongoose.model('surveys', surveySchema);
