//\\ بسم الله الرحمن الرحيم //\\
//imports

//imports
//
//express application instance, this is considered an import
const express = require("express");
const app = express();
//express application instance, this is considered an import
//
// requiring it in app.js. , this is considered an import
const products = require("./data");
//not sure about this one// const products = data();
// requiring it in app.js. , this is considered an import
//
//
//Product List Route
app.get("/api/products", (req, res) => {
  //
  return res.json(products);
});
//Product List Route
//
//routes: binding application to port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
//routes: binding application to port 8000
