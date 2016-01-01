var fs = require('fs');
var http = require('http');
var finalhandler = require('finalhandler');
var Router = require('router');
var router = Router();
var morgan = require('morgan');

var Edison = require('edison-io');

var five = require('johnny-five');
var board;

// state of LED
var onoff = 0;

board = new five.Board({
  repl: false,
  io: new Edison()
});

// connect to hardware
board.on('ready', function() {

  var led = new five.Led(13);
  var port = 3000;

  router.use(morgan('combined'));

  router.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Turn a device ON or OFF');
  });
  
  router.get('/state', function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("state: " + onoff);
    res.end();
  });
  
  // add API
  var api = Router();
  api.post('/led/:state', function(req, res) {
    onoff = parseInt(req.params.state);
    if (onoff == 1) {
      led.on();
    } else {
      led.off();
   }
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write('ok');
   res.end();
  });
  router.use('/api', api);

  http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res));
  }).listen(port);
  
});
