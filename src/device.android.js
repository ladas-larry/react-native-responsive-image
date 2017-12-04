var React = require('react');
var { Dimensions } = require('react-native');

var device = Dimensions.get('window');
var scale;

if (device.width <= 414) { 
	//Android smartphones
	scale = device.width / 414;
} else{
	//Android tablets
	scale = 1;
}

module.exports = { scale: scale };
