const express = require("express");
require("./config");
const Product = require("./video");
const app = express();
app.use(express.json());


app.post("/create", async (req, resp) => {
  const data = new Product(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});


app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});
app.listen(5000);
