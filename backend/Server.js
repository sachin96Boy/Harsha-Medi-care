const express = require("express");

// initiate other services
const mongoose = require("mongoose");
const dotenv = require("dotenv");

import prodData from "./Data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

//apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

//connection established to mongodb
mongoose.connect(
  process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connected to mongoDB");
  }
);

// app.get("/api/Products/:id", (req, res) => {
//   const product = prodData.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

// app.get("/api/products", (req, res) => {
//   res.send(prodData.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//listen to PORT estiblished in .env or default port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
