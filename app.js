var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3001;
var app = express();


//Header Priviledges
app.all('*',function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();}
);

//API Data set up
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));



app.post('/user', function (req, res) {
  console.log("data from frontend: ", req.body);
  // return req.body;
  res.send("we got your data!");
});




app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
