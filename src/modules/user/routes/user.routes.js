const express = require("express");
const userRouter = express.Router();
const {register, getAll} = require("../controllers/user.controller");

userRouter.post('/users', register);
userRouter.get('/users',getAll);

module.exports = userRouter;