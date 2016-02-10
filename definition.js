'use strict';

var implement = require('./implementation');

module.exports = function(options){
	var seneca = this;

	seneca.add({role: 'weather', cmd:'getWeather'}, implement.getWeather);
}