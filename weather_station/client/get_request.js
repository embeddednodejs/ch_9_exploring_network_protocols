#!/usr/bin/env node

// get_request.js
var request=require('request');

// take url from command line
var url=process.argv[2];
if (!url) {
  console.log('You must add a path.');
}
console.log('GET url: ' + url);

var headers = {'User-Agent': 'Sensor Agent'};
request.get(url, {headers: headers})
       .on('error', function(err) {
          console.log(err)
       }).pipe(process.stdout);

