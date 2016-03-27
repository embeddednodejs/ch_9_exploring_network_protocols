var five = require('johnny-five');
var request = require('request');

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '...',
  consumer_secret: '...',
  access_token_key: '...',
  access_token_secret: '...'
});
 
var btnPress = 0;
var newTweets = [];

client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
  console.log(tweets);
  if (error) {
    console.log(error);
  }
  if (!error) {
    newTweets = tweets.statuses;
    console.log(newTweets);
  }
});

var board;
board = new five.Board();
board.on('ready', function() {
  var button = new five.Button(4);

  var lcd = new five.LCD({
     controller: "JHD1313M1"
  });

  button.on('press', function() {
    lcd.clear();

    var tweet = newTweets[btnPress];
    console.log(tweet.text);
    var line1 = tweet.text.substr(0,14);
    var line2 = tweet.text.substr(15,15);
    lcd.cursor(0,0).print(line1);
    lcd.cursor(1,0).print(line2);
    btnPress++;
    
    if (btnPress > 10) {
      btnPress = 0;
    }

  });

});
