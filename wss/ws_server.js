var http = require('http');
var port = 4000;

// sockets to push bytes
var WebSocketServer = require('ws').Server;

// prepare server
var server = http.createServer(function (req, res) {
  res.write('ok');
  res.end();
}).listen(port);


var wss = new WebSocketServer({server: server});

wss.on('connection', function connection(ws) {
    console.log('websocket connected');
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

  setInterval(function() {
    ws.send(JSON.stringify({message: 'ping'}));
  }, 1500);

});
