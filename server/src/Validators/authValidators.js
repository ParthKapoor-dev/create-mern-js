const joi = require("joi");

export const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

export const signupValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})