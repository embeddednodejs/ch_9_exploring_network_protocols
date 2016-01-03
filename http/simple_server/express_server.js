var express = require('express');
var morgan = require('morgan')('dev');

// setup server
var port = 3000;
var app = express();
app.use(morgan);

// basic routes
app.get('/', function(req, res) {
  res.writeHead(200);
  res.write('hello');
  res.end();
});

// start server
app.listen(port);
