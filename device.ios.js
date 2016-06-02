var React = require('react');
var { Dimensions } = require('react-native');

var device = Dimensions.get('window');
var scale;

switch (device.width) {
	//iPhone4/4S and iPhone5/5S
  		case 320:
		scale = 0.77;
		break;
	//iPhone6/6S
  		case 375:
		scale = 0.902;
		break;
	//iPhone6plus/6Splus
  		case 414:
		scale = 1;
		break;
	//iPad
	default:
		scale = 1;
}

module.exports = { scale: scale };
