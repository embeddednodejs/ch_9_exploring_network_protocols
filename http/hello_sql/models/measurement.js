// load the database config 
var bookshelf = require('../config');
var WeatherEvent = require('./weather_event');

var Measurement = bookshelf.Model.extend({
   tableName: 'measurements',

   build: function(name) {
     var model = new Measurement({name: name});
     
     return

   },
   
   weatherEvents: function() {
     return this.hasMany('WeatherEvent');
   }
});
module.exports = bookshelf.model('Measurement', Measurement);
