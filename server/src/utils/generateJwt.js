const jwt = require("jsonwebtoken");

// data in as object
// exp is expiry
async function generateToken(data, exp) {
  const secret = process.env.SECRET;
  try {
    const token = jwt.sign(data, secret, { expiresIn: exp });
    
    return { success: true, token: token };
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
}

module.exports = generateToken;
