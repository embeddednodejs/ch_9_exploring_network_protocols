// load the database config 
var bookshelf = require('../config');
var Measurement = require('./measurement');

var WeatherEvent = bookshelf.Model.extend({
   tableName: 'weather_events',
   
   measurement: function() {
     return this.hasMany('Measurement');
   }
});
module.exports = bookshelf.model('WeatherEvent', WeatherEvent);
