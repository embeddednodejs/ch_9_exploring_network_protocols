var net = require('net');
var dnode = require('dnode');
var port = 4000;

var rpc = dnode();
rpc.on('remote', function (remote) {
  remote.ledOff();
});

var conn = net.connect(port, 'galileo');
conn.pipe(rpc).pipe(conn);
