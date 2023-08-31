const express = require('express');
const app = express();
const reqFilter = (req,resp,next)=>{
    if (!req.query.age){
        resp.send("please provide age")
    }
    else if (req.query.age<18){
        resp.send("you can not access this page")
    }
    else{
        next();
    }
}
app.use(reqFilter);
app.get("/",(req,resp)=>{
    resp.send("Wel come to Home Page")
})
app.get("/users",(req,resp)=>{
    resp.send("Wel come to Users Page")
})
app.get("/about",(req,resp)=>{
    resp.send("Wel come to about Page")
})
app.listen(5000)