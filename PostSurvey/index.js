require("dotenv").config();
const mongoose = require("mongoose");
const createMongoClient = require("../shared/mongo");
const Survey = require("../models/Survey");

module.exports = async function (context, req) {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!!");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }

  try {
    let newSurvey = new Survey({
      postedBy: req.body.postedBy,
      title: req.body.title,
    });
    let savedsurvey = await newSurvey.save();
    context.res = {
      status: 200,
      body: savedsurvey,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Error creating a new Survey",
      error,
    };
  }
};
