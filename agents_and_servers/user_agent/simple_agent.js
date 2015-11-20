#!/usr/bin/env node
var request = require('request');
var argv = require('minimist')(process.argv.slice(2));

// take url from command line
var url=process.argv[2];
if (!url) {
  console.log('You must add a path.');
}
console.log('GET url: ' + url);

var headers = {'User-Agent': 'Sensor Agent'};

if (argv.X === 'POST') {
  console.log('post');
} else {
  request(url, {headers: headers}).pipe(process.stdout);
}
