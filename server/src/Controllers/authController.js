const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateJwt");


async function UserLogin(req, res) {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user)
      throw new Error("Unregistered Email , Try SignUp");

    const verify = await bcrypt.compare(password, user.password);
    if (!verify)
      throw new Error("Incorrect Password");


    const token = await generateToken({ userId: user._id }, "3d");
    if (!token.success)
      throw new Error(token.message);

    res.json({ success: true, data: { token: token.token , user } })
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password : hashedPassword });
    const token = await generateToken({ userId: user._id }, "3d");
    res.json({ success: true, data: { token : token.token, user } });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message })
  }
}


module.exports = {
  UserLogin,
  UserSignup
}