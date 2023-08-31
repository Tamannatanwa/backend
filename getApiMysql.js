const express = require("express");
const app = express();
const con = require("./config");
app.use(express.json());
app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});
app.listen(5000);