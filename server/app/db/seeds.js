import once from "./conns/once.js";
import productsData from "./data.js";

// Anonymous IIFE - Immediately Invoked Function Expression
(() => {
  console.log("hi");
})();

once
  .connect()
  .then((connection) =>
    connection.db("products").collection("products").insertMany(productsData)
  )
  .then(() => {
    once.close();
  });
