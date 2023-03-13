const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const config = {
  url: "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.rqkm7.mongodb.net/?retryWrites=true&w=majority",
  dbName: "surveysDB",
  mongooseUrl:
    "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.rqkm7.mongodb.net/surveysDB?retryWrites=true&w=majority",
};

async function createConnection() {
  const connection = await MongoClient.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Successfully connected to MongoDB");
  const db = await connection.db(config.dbName);
  return {
    connection,
    db,
  };

  //   try {
  //     const connection = mongoose.createConnection(config.mongooseUrl, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     });
  //     console.log("Successfully connected to MongoDB");
  //     //const db = await connection.db(config.dbName);
  //     return {
  //       connection,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
}

module.exports = createConnection;
