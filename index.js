const express = require ("express");
const app = express();
const http = require("http");
const port = 3000;
app.get('/get' , (req,res)=>{
  res.send("server says hello!")
});
app.post('/post', (req, res) => {
  res.send({ message: 'POST request received', data: req.body });
});
app.put('/put', (req, res) => {
  res.send({ message: `PUT request for ID ${req.params.id}`, data: req.body });
});

app.patch('/patch', (req, res) => {
  res.send({ message: `PATCH request for ID ${req.params.id}`, data: req.body });
});

app.delete('/delete', (req, res) => {
  res.send({ message: `DELETE request for ID ${req.params.id}` });
});
  
app.listen(port,()=>{
  console.log(`server is running on port : ${port}`)
});
