// models/Book.js

const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  q1: {
    type: Number,
    required: true,
  },
  q2: {
    type: Number,
    required: true,
  },
  q3: {
    type: Boolean,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = Survey = mongoose.model("survey", SurveySchema);
