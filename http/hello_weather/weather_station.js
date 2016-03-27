// hello_weather.js
var weather = require('weather-js');
var location = 'Paris, France';
//var location = 'Athens, Greece';
//var location = 'Munich, Germany';
var degreeType = 'C';

    // weather_station.js
    var five = require('johnny-five');
    var board;

    board = new five.Board();
    board.on('ready', function() {

      var button = new five.Button(4);
      var lcd = new five.LCD({
         controller: "JHD1313M1"
      });

      button.on('press', function() {
        console.log('press');
        lcd.clear();
        weather.find({search: location, degreeType: degreeType}, function(err, result) {
          if (err) {
              console.log("problem fetching weather");
              console.log(err);
              process.exit(0);
           }
        lcd.cursor(0,0).print(location);
        lcd.cursor(1,0).print("temp: "+ result[0].current.temperature);
      });
    });

});
