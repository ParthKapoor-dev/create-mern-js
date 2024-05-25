const express = require("express");
const AuthRouter = require("./AuthRoutes");
const router = express.Router();

router.use("/auth", AuthRouter);