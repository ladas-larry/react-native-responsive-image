var Device = require('./device');

function applyScale(size) {
  return Math.ceil(size * Device.scale);
}

module.exports = applyScale;
