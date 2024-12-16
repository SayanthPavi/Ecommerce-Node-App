const mongoose = require("mongoose");
const env = require("dotenv").config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("DataBase Connection Error", error.massage);
  }
};

module.exports = connectDB;
