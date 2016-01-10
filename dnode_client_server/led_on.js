var net = require('net');
var dnode = require('dnode');
var port = 4000;

var objects = dnode();
objects.on('remote', function (remote) {
  remote.ledOn();
});


var conn = net.connect(port, '192.168.3.102');
conn.pipe(objects).pipe(conn);
