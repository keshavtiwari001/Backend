exports.genOTP = () => {
  return Math.floor(Math.random() * 10000);
};
// console.log(genOTP());

exports.expiresOTP = () => {
  const full = Date.now() + 10 * 60 * 1000;
  return full;
};
// expiresOTP();

const moment = require("moment");
const ab = moment().format();
console.log(ab);
