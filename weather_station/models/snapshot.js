// models/snapshot.js
// load the database config
var bookshelf = require('../config');
var Measurement = require('./measurement');

var Snapshot = bookshelf.Model.extend({
  tableName: 'snapshots',
  hasTimestamps: true,
  measurements: function() {
  return this.hasMany('Measurement');
  }
});

module.exports = bookshelf.model('Snapshot', Snapshot);
