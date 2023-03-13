const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Survey = mongoose.model("survey", surveySchema);
module.exports = Survey;
