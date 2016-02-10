'use strict';
var request = require('request');

exports.getWeather = function (args, done) {
  console.log("getWeather: " + args);
  let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + args.city +
    '&mode=json&units=metric&cnt=16&APPID=c96d6e485f7907e490a8b3b1aa98b502';
  request.get(url, function (err, response) {
    if (err) {
      console.error(err);
      return done(err, null);
    }
    //return done(null, response);
    //console.log(response.body);
    var object = JSON.parse(response.body);
    var city = object.city.name;
    var todaysWeather = object.list[0];
    var temperatuur = Math.round(todaysWeather.temp.day);
    var weather = todaysWeather.weather[0].description;
    var icon = todaysWeather.weather[0].icon;
    var html = '<div>' +
      '<h3>Today\'s weather for ' + city + '</h3>' +
      '<p>It will be ' + temperatuur + '°C</p>' +
      '<p>There will be <b>' + weather + '</b></p>' +
      '<img src="http://openweathermap.org/img/w/10d.png" alt="' + weather + '">' +
      '</div>';
    return done(null, {html: html});
  });
};