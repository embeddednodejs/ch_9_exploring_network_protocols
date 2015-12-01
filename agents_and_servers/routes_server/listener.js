var fs = require('fs');
var http = require('http');
var finalhandler = require('finalhandler');
var Router = require('router');
var router = Router();
var morgan = require('morgan')('combined');
router.use(morgan);

// message for display
var message = 'init';

var port = 3000;
router.get('/', function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Turn a device ON or OFF');
});

router.get('/state', function(req,res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end(state);
});

// add API
var api = Router();
api.post('/message/:state', function(req, res) {
  message = req.params.state;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('ok');
});
router.use('/api', api);

http.createServer(function (req, res) {
 router(req, res, finalhandler(req, res));
}).listen(port);

