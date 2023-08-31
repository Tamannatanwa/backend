const express = require("express");
const app = express();
const con = require("./config");
app.use(express.json());
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