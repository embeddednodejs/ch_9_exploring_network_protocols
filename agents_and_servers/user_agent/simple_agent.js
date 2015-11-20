#!/usr/bin/env node
var request = require('request');

// take url from command line
var url=process.argv[2];
if (!url) {
  console.log('You must add a path.');
}
console.log('GET url: ' + path);

var headers = {'User-Agent': 'Sensor Agent'};
request(url, {headers: headers}).pipe(process.stdout);
