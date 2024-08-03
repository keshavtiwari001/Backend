const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async ()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Database Connected".bgGreen.white);
    } catch (e) {
        console.log(`Error occured: ${e}`.bgBlack.green)
    }
}
module.exports = connectDb;