const express = require("express");
const app = express();
const con = require("./config");
app.use(express.json());
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
app.listen(5000);