const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "sdfjdslkfdfjojnnnoiertuoiiwhgg900932";
const { genOTP, expiresOTP } = require("../helper/otp");
exports.createUser = async (req, res) => {
  try {
    const fileData = req.body;
    console.log(fileData);
    const data = req.body;
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const user = new User(data);
    console.log(user);
    user.save();
    res.status(201).json({ message: "user created successfully!", user });
    console.log("user created successfully!");
  } catch (error) {
    res.status(400).json({ message: "not registered!!" });
    console.log("err in createUser");
  }
};

exports.getUsers = async (req, res) => {
  // const fileData = req.body;
  // console.log(fileData);

  const user = await User.find();
  res.status(201).json(user);
};

// Single User ->
exports.getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  res.status(201).json(user);
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await User.findByIdAndUpdate(id, data);
  res.status(201).json(user);
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.status(201).json({ message: "user deleted successfully !!" });
};

// sign uppppppppp
exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  const otp = genOTP();
  console.log(otp);
  const otpExpire = expiresOTP();
  console.log(otpExpire);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  // if if if
  if (!(email && password && name)) {
    return res.status(400).json({ message: "All fields are require" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! please login" });
  }
  const data = { email, name, password: hash, otp, otpExpire };
  console.log(data);
  const user = new User(data);
  await user.save();
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password, otp } = req.body;
  if (!(email && password && otp)) {
    return res.status(400).json({ message: "All fields are require" });
  }
  const existingUser = await User.findOne({ email });
  console.log("existingUser>>>>>>>>>>>>>>>>>>>>", existingUser);
  if (!existingUser) {
    return res.status(400).json({ message: "use not exist! please sign in" });
  }
  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(400).json({ message: "invalid password" });
  }
  const currentTime = Date.now();
  if (otp !== existingUser.otp) {
    return res.status(400).json({ message: "otp worong" });
  } else if (currentTime <= existingUser.expireTime) {
    return res.status(400).json({ message: "OTP expires !!" });
  }
  // const otpInTime = () => {};

  const token = jwt.sign({ id: existingUser._id }, secret, { expiresIn: "1m" });
  console.log(`>>>>>>token>>>>>>>>>>>`, token);

  res.json({ token, existingUser });
};
