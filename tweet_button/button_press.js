
    var five = require('johnny-five');
    var board;

    board = new five.Board();
    board.on('ready', function() {

      var button = new five.Button(4);
      button.on('press', function() {
        console.log('press');
      });
    });
