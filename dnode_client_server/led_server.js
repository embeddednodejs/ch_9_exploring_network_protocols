   // port to listen to
   var port = 4000;

   // setup board
   var five = require('johnny-five');

   // board adapters
   // var Edison = require('edison-io');
   var Galileo = require('galileo-io');
   // var Beaglebone = require('beaglebone-io');

   var board = new five.Board({
     repl: false,
     io: new Galileo
   });

   board.on("ready", function() {
     this.led = new five.Led(3);

     // now startup server
     startupServer(this);
   });

   function startupServer(board) {
     var dnode = require('dnode');
     var net = require('net');

     // create local web server
     var server = net.createServer(function(conn) {

       // setup RPC objects
       var rpc = dnode({
         ledOn: function() {
           console.log('on');
           board.led.on();
         },
         ledOff: function() {
           board.led.off();
         }
       });

       // connect local dnode objects with remote
       conn.pipe(rpc).pipe(conn);
     });

     server.listen(port, function() {
       console.log('Server running on port: ' + port);
     });
   }
