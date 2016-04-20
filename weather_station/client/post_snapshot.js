#!/usr/bin/env node

// post_request
var request=require('request');

// the URL for the weather station to come
var url = "http://localhost:4000/measurements/1";
var headers = {'User-Agent': 'Sensor Agent',
   'content-type': 'application/json'};

var data = {temp: 25};
request({
      url: url,
      method: 'POST',
      form: data,
      headers: headers})
   .on('error', function(err) {
      console.log(err)
   }).pipe(process.stdout);
