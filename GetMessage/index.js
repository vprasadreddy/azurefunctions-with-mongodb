require("dotenv").config();

module.exports = async function (context, req) {
  try {
    context.res = {
      status: 200,
      body: "Hello, welcome",
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
