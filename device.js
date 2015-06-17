var device = require('Dimensions').get('window');

var scale = 1;

//iPhone4
if (device.width === 320 && device.height == 480) {
    scale = 0.592;
}

//iPhone5
if (device.width === 320 && device.height == 568) {
    scale = 0.592;
}

//iPhone6
if (device.width === 375 && device.height == 667) {
    scale = 0.6944;
}

//iPhone6plus
if (device.width === 414 && device.height == 736) {
    scale = 1;
}


module.exports = {
    scale: scale
};
