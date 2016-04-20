// server_with_db.js
var express = require('express');
var bodyParser = require('body-parser');

// connect with db
var bookshelf = require('./config');
var Measurement = require('./models/measurement');
var Snapshot = require('./models/snapshot');

var port = 4000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// basic routes
app.get('/', function(req, res) {
  res.writeHead(200);
  res.write('server is running');
  res.end();
});

// measurements
app.get('/measurements/:measurement_id', function(req, res) {
    res.writeHead(200);
    Measurement.collection().fetch({
      withRelated: ['snapshots']
    })
    .then(function(collection) {
      return collection.mapThen(function(model) {
        return model.toJSON();
      })
    })
   .then(function(results) {
      res.write(JSON.stringify(results, null, ' '));
      res.end();
    })
   .catch(function(e) {
     console.log(e);
     res.write('problem');
     res.end();
   });
});

app.post('/measurements', function(req, res) {
   var snapshot = Snapshot.forge({measurement_id: req.body.id, temp: req.body.temp});
   snapshot.save().
   then(function() {
   res.writeHead(200);
   res.write('snapshot saved');
   res.end();
 })
 .catch(function(err) {
   res.writeHead(200);
   res.write('problem saving snapshot');
   res.write(err);
   res.end();
 });
});

app.post('/measurements/:id', function(req, res) {
   var snapshot = Snapshot.forge({measurement_id: req.params.id, temp: req.body.temp});
   snapshot.save().
   then(function() {
   res.writeHead(200);
   res.write('snapshot saved');
   res.end();
 })
 .catch(function(err) {
   res.writeHead(200);
   res.write('problem saving snapshot');
   res.write(err);
   res.end();
   });
});

var server = app.listen(port);
