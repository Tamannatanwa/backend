const express = require("express");
const app = express();
const reqFilter = require("./middlewar");
const route = express.Router();
// app.use(reqFilter);
route.use(reqFilter)
app.get("/", (req, resp) => {
  resp.send("Wel come to Home Page");
});
app.get("/users", (req, resp) => {
  resp.send("Wel come to Users Page");
});
// app.get("/contact", reqFilter, (req, resp) => {
//     resp.send("Wel come to Contact Page");
//   });
route.get("/contact", (req, resp) => {
    resp.send("Wel come to Contact Page");
  });
route.get("/about", (req, resp) => {
  resp.send("Wel come to about Page");
});
app.use("/",route)
app.listen(5000);