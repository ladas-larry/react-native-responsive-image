var React = require('react-native');
var { Dimensions } = React;

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
