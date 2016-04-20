// models/measurement.js
// load the database config
var bookshelf = require('../config');
var Snapshot = require('./snapshot');

var Measurement = bookshelf.Model.extend({
    tableName: 'measurements',
    hasTimestamps: true,
    snapshots: function() {
    return this.hasMany('Snapshot');
  }
});
module.exports = bookshelf.model('Measurement', Measurement);
