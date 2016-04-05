// load the database config 
var bookshelf = require('../config');
var Measurement = require('./measurement');

var BasicEvent = bookshelf.Model.extend({
   tableName: 'basic_events',
   hasTimestamps: true
});
module.exports = bookshelf.model('BasicEvent', BasicEvent);
