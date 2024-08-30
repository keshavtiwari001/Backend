const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { require: true, type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique: true },
    otp: { type: Number, require: true },
    otpExpire: { type: Number, require: true },
  },
  { timeseries: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
