const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function MongoDb() {
  const uri = process.env.MONGO_URI;
  try {
    if (!uri) {
      throw new Error("Missing MongoDB URI");
    }
    await mongoose.connect(uri);
    console.log("Connected to MongoDB 👻");
    return true

  } catch (err) {
    console.log(err);
    return false;
  }
}
const connect = {
  MongoDb : MongoDb
}
module.exports = connect;

