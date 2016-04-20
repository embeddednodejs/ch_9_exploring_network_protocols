// scripts/add_measurement.js
var bookshelf = require('../config');
var Measurement = require('../models/measurement');
var measurement = Measurement.forge({name: 'Sensor 1'});
measurement
  .save()
  .then(function() {
    return bookshelf.knex.destroy();
  });
