// scripts/add_measurement.js
var bookshelf = require('../config');
var Snapshot = require('../models/snapshot');

var snapshot = Snapshot.forge({measurement_id: 1, temp: 23});
snapshot
  .save()
  .then(function() {
    return bookshelf.knex.destroy();
  });
