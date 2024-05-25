const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const { default: generateToken } = require("../utils/generateJwt");

async function UserLogin(req, res) {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user)
      throw new Error("Unregistered Email , Try SignUp");

    const verify = bcrypt.compare(password, user.password);
    if (!verify)
      throw new Error("Incorrect Password");

    const token = await generateToken({ userId: user._id }, "3d");
    if (!token.success)
      throw new Error(token.message);

    res.json({ success: true, data: { token, user } })
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message })
  }
}


async function UserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      throw Error("Account Already Exists, Try Login");

    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);

    const user = await User.create({ name, email, hashedPassword });

    res.json({ success: true, data: { token, user } });

  } catch (error) {
    console.log(err);
    res.json({ success: false, message: err.message })
  }
}


module.exports = {
  UserLogin,
  UserSignup
}