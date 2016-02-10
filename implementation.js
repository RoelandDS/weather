'use strict';
var request = require('request');

exports.getWeather = function(args, done){
	console.log("getWeather: " + args);
	let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + args.city + 
					'&mode=json&units=metric&cnt=16&APPID=c96d6e485f7907e490a8b3b1aa98b502';
	request.get(url, function(err, response){
		if(err) {
			console.error(err);
			return done(err, null);
		}
		//return done(null, response);
		return done(null, "<div>Toda's weather for "+args.city+"</div>");
	});
};