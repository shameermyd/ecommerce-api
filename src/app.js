const express = require("express");
const app = express();
const userRouter = require("./modules/user/routes/user.routes")

app.use(express.json());

app.use('/',userRouter)

module.exports = app;