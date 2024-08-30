const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected>>".bgGreen.black);
  } catch (error) {
    console.log(`Error occured: ${error}`.bgRed.white);
  }
};
module.exports = connectDb;
