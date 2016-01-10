var dgram = require('dgram');
var client = dgram.createSocket("udp4");

var counter = 0;

client.on('message', function (message, remote) {
   console.log(remote.address + ':' + remote.port +' - ' + message);

   client.close();
});


// var address = 'galileo';
var address = '192.168.3.6';
var port = 5000;

var message = new Buffer('Request temperature');

client.send(message, 0, message.length, port, address, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + address +':'+ port);
});
