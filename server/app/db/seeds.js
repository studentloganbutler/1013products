import products from "./data.js";
import once from "./connections/once.js";

once
  .connect()
  .then((connection) =>
    connection.db("products").collection("products").insertMany(products)
  )
  .then(() => {
    once.close();
  });
