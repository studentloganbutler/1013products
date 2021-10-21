import Router from "express";
import config from "./config.js";
import client from "./db/connections/client.js";
import { ObjectId } from "mongoDB";

const {
  db: { name, collectionName },
} = config;

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

router.get("/products", (_, res) => {
  const products = client
    .db("products")
    .collection("products")
    .find()
    .toArray();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await client
    .db(name)
    .collection(collectionName)
    .findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

export default router;
