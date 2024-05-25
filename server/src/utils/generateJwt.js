const jwt = require("jsonwebtoken");

// data in as object
// exp is expirey

export default async function generateToken(data, exp) {
  const secret = process.env.SECRET
  try {
    const token = jwt.sign(data, secret, { expiresIn: exp },
      (err, res) => {
        if (err) {
          console.log(err);
          throw new Error("Error in generating Token");
        }
      });
    return { success: true, token }
  } catch (error) {
    return { success: false, message : error.message }
  }
}
