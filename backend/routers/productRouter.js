import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require("express");
const expressAsyncHandler = require("express-async-handler");

import Product from "../models/productModel.js";
import data from "../Data.js";

const productRouter = express.Router();

// show the default product list in "/" directory
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

//add data to mongoose database from local stored data
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const createdProduct = await Product.insertMany(data.products);
    res.send({ createdProduct });
  })
);

//getelement by each id
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(400).send({ message: "product Not Found" });
    }
  })
);

export default productRouter;