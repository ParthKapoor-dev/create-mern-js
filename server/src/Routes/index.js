const express = require("express");
const AuthRouter = require("./AuthRoutes");
const AppRouter = express.Router();

AppRouter.use("/auth", AuthRouter);
  
module.exports = AppRouter;