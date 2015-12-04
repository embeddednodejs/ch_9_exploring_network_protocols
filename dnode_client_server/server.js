var port = 4000;

// setup board
var five = require('johnny-five');

// board adapters
// var Edison = require('edison-io');
// var Galileo = require('galileo-io');
// var Beaglebone = require('beaglebone-io');

var board = new five.Board({
    repl: false
});

board.on("ready", function() {
  var led = new five.Led(13);
  var slider = new five.Sensor("A1");
  led.blink(500);

  // now startup server
  startupServer(slider);
});

/*
  // use without board connected
  var slider;
  startupServer(slider);
*/

function startupServer(slider) {
  var dnode = require('dnode');
  var net = require('net');

  var lastValue;
  slider.on('slide', function(d) {
    lastValue = d;
  });

  var server = net.createServer(function(conn) {

    var objects = dnode({
      getState: function(cb) {
        cb(lastValue);
      }
    });
    
    conn.pipe(objects).pipe(conn);
  });
  server.listen(port, function() {
    console.log('Server running on port: ' + port);
  });
}

