
var WebSocket = require('ws');

var client = new WebSocket('ws://localhost:4000');

client.on('open', function() {
  client.on('message', function() {
    console.log('push');
  });
});

