const express = require("express");
const authRouter = express.Router();
const { userLogin } = require("../controller/auth");

authRouter.post("/", userLogin);

module.exports = authRouter;
