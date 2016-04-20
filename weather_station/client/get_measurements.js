#!/usr/bin/env node

// get_request.js
var request=require('request');

var url='http://localhost:4000/measurements/1';
console.log('GET url: ' + url);

var headers = {'User-Agent': 'Sensor Agent'};
request.get(url, {headers: headers})
       .on('error', function(err) {
          console.log(err)
       }).pipe(process.stdout);

