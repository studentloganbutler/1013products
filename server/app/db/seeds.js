import { config } from "../../config.js";
import once from "./connections/once.js";
import productsData from "./data.js";

const {
  db: { name, collectionName },
} = config;

console.log(name, collectionName);

// Anonymous IIFE - Immediately Invoked Function Expression
(async () => {
  const connections = await once.connect();
  await connections.db(name).collection(collectionName).deleteMany({});
  await connections.db(name).collection(collectionName).insertMany(productsData);
  connections.close();
})();
