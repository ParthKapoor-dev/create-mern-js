const express = require("express");
const { UserLogin, UserSignup } = require("../Controllers/authController");
const validate = require("../Middleware/validatorMiddleware")
const { loginValidator, signupValidator } = require("../Validators/authValidators");
const AuthRouter = express.Router(); 

AuthRouter.post("/login", validate(loginValidator) ,UserLogin);
AuthRouter.post("/signup", validate(signupValidator) , UserSignup);

module.exports = AuthRouter;