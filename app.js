var express = require('express');
var nodemailer = require('nodemailer');
var app = express();


app.all('*',function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();}
);

app.get('/user', function (req, res) {
    res.send(req);
});

app.post('/user', function(req,res){
    console.log("hello");
});




app.listen(4000,()=>{
    console.log('listening on 4000');
});
