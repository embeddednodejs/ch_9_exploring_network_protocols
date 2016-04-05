var bookshelf = require('./config');

var BasicEvent = require('./models/basic_event');
var Promise = require("bluebird");

BasicEvent.collection().fetch()
.then(function(collection) {
    // collection is a bookshelf collection object
    // collection.mapThen returns a promise
    return collection.mapThen(function(model) {
        console.log("model " + JSON.stringify(model.toJSON()));
    })
})
.catch(function(e) {
  console.log(e);
})
.finally(function() {
  return bookshelf.knex.destroy();
});
