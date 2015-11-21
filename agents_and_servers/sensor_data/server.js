var http = require('http');

var Board = require('firmata');

var modem = '/dev/cu.usbmodem14141';
var board = new Board(modem);

var sensorVal = 0;

console.log('board starting');
board.on('ready', function() {
  console.log('board ready');

  // update sensor value
  board.analogRead(0, function(data) {
    sensorVal = data;
  });

  var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('data: ' + sensorVal + '\n');
  });

  // start server at a port
  var port = 3000;
  server.listen(port);
  console.log('Starting server at port: ' + port);
  
});
