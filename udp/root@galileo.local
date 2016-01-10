var dgram = require('dgram');
var server = dgram.createSocket("udp4");

var port=9888;

server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('close', function () {
  console.log('Client closed connection');
});

function sendTemperature(server, remote) {
  var temp = 1;
  var message = new Buffer('Time: ' + (new Date()) + '  Temp: ' + temp + '\n');
  server.send(message, 0, message.length, remote.port, remote.address, fuction(err, bytes) {
    if (err) {
      console.log(err);
    } else {
      console.log('tx: ' + message);
    }
  });
}

server.on('message', function(message, remote) {
  sendTemperature(server, remote);
});

server.bind(port);
