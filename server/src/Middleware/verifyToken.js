const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

async function verfiyToken(req, res, next) {

  const token = req.headers.authorization;
  const secret = process.env.SECRET
  try {
    if (!token)
      throw new Error("Unauthorized : Token is Missing");

    const { userId } = jwt.verify(token, secret);
    const user = await User.findOne({ _id: userId });

    if (!user)
      throw new Error("Invalid Token : No User Exists");

    req.user = user;

    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = verfiyToken