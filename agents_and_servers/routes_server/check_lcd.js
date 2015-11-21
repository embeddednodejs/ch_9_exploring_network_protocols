
var five = require('johnny-five');

var board, lcd;

board = new five.Board({});

board.on('ready', function() {

  lcd = new five.LCD({
    controller: 'JHD1313M1'
  });

  lcd.print('hello');

});
