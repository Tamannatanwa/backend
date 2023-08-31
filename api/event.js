const express = require('express')
const Eventmitter = require('events');
const app = express()
const event = new Eventmitter();
let count=0;
event.on('countApi',()=>{
  count++;
  console.log("event called",count)
})
app.get("/",(req,resp)=>{
  resp.send("find api called")
  event.emit('countApi')
})
app.get("/search",(req,resp)=>{
  resp.send("search api called")
  event.emit('countApi')
})
app.get("/update",(req,resp)=>{
  resp.send("update api called")
  event.emit('countApi')
})
app.listen(5000);