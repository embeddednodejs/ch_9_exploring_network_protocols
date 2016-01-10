var request=require('request');
var five = require('johnny-five');

var board;

board = new five.Board();
board.on('ready', function() {
  var button = new five.Button(4);
  button.on('press', function() {
    var headers = {'User-Agent': 'Arduino Agent'};
    var url = 'http://embeddednodejs.com/dummy_data.json';
    request(url, {headers: headers}).pipe(process.stdout);
  });
});

