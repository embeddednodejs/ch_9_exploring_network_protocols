var fs = require('fs');
var http = require('http');
var finalhandler = require('finalhandler');
var Router = require('router');
var router = Router();
var formBody = require("body/form")

var ecstatic = require('ecstatic');
router.use(ecstatic({ root: __dirname + '/static' }));

// message for display
var message = 'init';

var port = 3000;
router.get('/state', function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(state);
});

// add API

function updateMessage(err, body) {
  message = body.message;
}

var api = Router();
api.post('/message', function(req, res) {
  formBody(req, {}, updateMessage)
  res.writeHead(301, {Location: '/'});
  res.end();
});
router.use('/api', api);



var five = require('johnny-five');
var board, lcd;

board = new five.Board({
  repl: false
});

board.on('ready', function() {

  lcd = new five.LCD({
    controller: 'JHD1313M1'
  });
  console.log(message);

  this.loop(300, function() {
    lcd.clear()
        .cursor(0, 1)
        .print(message);
  });

  http.createServer(function (req, res) {
   router(req, res, finalhandler(req, res));
  }).listen(port);
  
});

