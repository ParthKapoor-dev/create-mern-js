const joi = require("joi");

const loginValidator = joi.object({
  email: joi.string().email().required(),
  // password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  password: joi.string().required()
})

const signupValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  // password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  password: joi.string()
})


module.exports = {
  loginValidator,
  signupValidator
}