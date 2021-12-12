// import { createRequire } from 'module';
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// const require = createRequire(import.meta.url);

// const express = require("express");
// const expressAsyncHandler = require("express-async-handler");

import User from "../models/userModel.js";
import data from "../Data.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
  })
);

export default userRouter;