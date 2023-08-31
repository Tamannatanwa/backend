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

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO users SET ?", data, (error, result, fields) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.put("/:firstName", (req, resp) => {
  const data = [req.body.firstName, req.body.lastName, req.body.subject, req.body.marks, req.params.firstName]; // Fixed: changed req.body.subject to req.body.marks
  con.query(
    "UPDATE users SET firstName = ?, lastName = ?, subject = ?, marks = ? WHERE firstName  = ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});
app.delete("/:firstName", (req, resp) => {
  const firstName = req.params.firstName;
  con.query(
    "DELETE FROM users WHERE firstName = ?",
    [firstName],
    (error, results, fields) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});
app.listen(5000);


