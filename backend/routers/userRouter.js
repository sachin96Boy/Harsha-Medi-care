// import { createRequire } from 'module';
import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
// const require = createRequire(import.meta.url);

// const express = require("express");
// const expressAsyncHandler = require("express-async-handler");

import User from "../models/userModel.js";
import data from "../Data.js";
import { generateToken } from "../Utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUser = await User.insertMany(data.users);
    res.send({ createdUser });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  }),
);

export default userRouter;
