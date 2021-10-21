import Router from "express";
import config from "./config.js";
import client from "./db/connections/client.js";

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
  res.send(products);
});

export default router;
