// hello_weather.js
var weather = require('weather-js');
// var location = 'Paris, France';
var location = 'Athens, Greece';
var degreeType = 'C';

weather.find({search: location, degreeType: degreeType}, function(err, result) {
  if (err) {
      console.log("problem fetching weather");
      console.log(err);
      process.exit(0);
   }

   console.log(result);
});
