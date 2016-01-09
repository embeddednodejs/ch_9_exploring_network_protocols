var five = require('johnny-five');

var http = require('http');
var port = 4000;

var board = new five.Board({
  repl: false
});

// setup websocket server to push bytes
function setupServer(board) {

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
        var state = parseInt(message);
        state == 1 ? board.led.on() : board.led.off();
        ws.send('new state: ' + state);
      });
      
      board.button.on('press', function() {
        ws.send('button push');
      });
  
//      setInterval(function() {
//        ws.send(JSON.stringify({message: 'ping'}));
//      }, 1500);
  });

}

board.on('ready', function() {

  this.led = new five.Led(3);
  this.button = new five.Button(9);
 
  setupServer(this);

});

