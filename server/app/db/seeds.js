import { config } from "dotenv";
import once from "./connections/once.js";
import productsData from "./data.js";

const {
  db: { name, collectionName },
} = config;
// Anonymous IIFE - Immediately Invoked Function Expression
(async () => {
  const connections = await once.connect();
  await connections.db(name).collection(name).deleteMany({});
  await connections.db(name).collection(name).insertMany(productsData);
  connections.close();
})();
