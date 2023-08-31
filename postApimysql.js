const express = require("express");
const app = express();
const con = require("./config");
app.use(express.json())
app.post("/",(req,resp)=>{
    const data = req.body
    con.query("INSERT INTO users SET ?",data,(error,result,fields)=>{
      if (error) throw  error;
      resp.send(result)
    })
  })
app.listen(5000);