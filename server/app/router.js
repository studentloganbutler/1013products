import Router from "express";
import config from "./config.js";
import client from "./db/connections/client.js";
import { ObjectId } from "mongoDB";

const collection =  client.db(config.db.name).collection(config.db.collectionName)


const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

router.get("/products", (_, res) => {
  const products = client
    .db("Products")
    .collection("products")
    .find()
    .toArray();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await client
    .db("Products")
    .collection("products")
    .findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

router.post("/products", async (req, res) => {
  const createdProduct = await collection.insertOne(req.body);
  res.json(createdProduct);
});

router.put("/products", async (req, res) =>{
  const updatedProducts = await collection.updateOne({id: ObjectId(req.body.id)}
  , {$set: req.body.payload})
  res.json(updatedProducts)
});

router.delete("/products", async (req, res) => {
  const deleteProduct = await collection.deleteOne({
    id: ObjectId(req.body.id),
  });
  res.json(deleteProduct);
});

export default router;
