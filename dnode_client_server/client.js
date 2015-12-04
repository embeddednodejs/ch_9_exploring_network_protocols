var net = require('net');
var dnode = require('dnode');
var port = 4000;

var objects = dnode();
objects.on('remote', function (remote) {
  remote.getState(function(data) {
    console.log(data);
  });
});


var conn = net.connect(port);
process.stdin.pipe(conn);
conn.pipe(objects).pipe(conn);
