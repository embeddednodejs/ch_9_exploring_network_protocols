// server.js
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 4000;

// create server
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

// basic routes
app.get('/', function(req, res) {
  res.writeHead(200);
  res.write('weather station is up');
  res.end();
});

// measurements
app.get('/measurements/:measurement_id', function(req, res) {
  res.writeHead(200);
  res.write('data from measurement');
  res.end();
});

app.post('/measurements', function(req, res) {
   console.log('temp is: ' + req.body.temp);
   res.writeHead(200);
   res.write('storing data.');
   res.end();
});

app.post('/measurements/:id', function(req, res) {
  console.log(req.params.id);
   console.log('temp is: ' + req.body.temp);
   res.writeHead(200);
   res.write('storing data.');
   res.end();
});
var server = app.listen(port);
