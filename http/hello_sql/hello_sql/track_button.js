var five = require('johnny-five');

// connect with db
var bookshelf = require('./config');
var BasicEvent = require('./models/basic_event');

var board = new five.Board({
  repl: false
});

board.on('ready', function() {
  console.log('connected');
  var button = new five.Button(4);
  button.on('press', function() {
    console.log('press');
    var m = BasicEvent.forge({name: 'press'});
    m.save()
  });
});
