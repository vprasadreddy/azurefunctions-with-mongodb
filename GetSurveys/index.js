require("dotenv").config();
const mongoose = require("mongoose");
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
    let surveys = await Survey.find({});
    context.res = {
      status: 200,
      body: surveys,
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
