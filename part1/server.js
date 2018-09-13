var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/hello', function(req, res) {
  res.send("Hello!");
});

app.post('/create/:name', function(req, res) {
  var myReturn = {
    "id":1,
    "name":`${req.params.name}`
  }
  res.json(myReturn);
});

app.get('/', function(req, res) {
  res.sendFile("/Users/tomgabauer/galvanize/expressIntroChallenges/part1/index.html");
});

app.get('/verify/:age', function(req, res) {
  if (req.params.age > 13) {
    res.sendStatus('200')
  }
  res.sendStatus("403");
});



app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
