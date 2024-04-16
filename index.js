const express = require ("express");
const app = express();
const http = require("http");


app.get('/' , (req,res)=>{
  res.send("hi there!")
});

app.listen(8000,()=>{
  console.log("server is running on port no : 8000")
});