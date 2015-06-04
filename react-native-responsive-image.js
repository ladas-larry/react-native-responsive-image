var React = require('react-native');
var Device = require('react-native-device');


var {
    Image,
    } = React;

var ResponsiveImage = React.createClass({
    render: function () {
        var scales;
        if (Device.isIphone) {
            scales = {
                iPhone4: 0.592,
                iPhone5: 0.592,
                iPhone6: 0.6944,
                iPhone6plus: 1
            };
        } else {
            //for iPad use width and height of device
        }
        var width = Math.ceil(this.props.initWidth * scales[Device.kind]);
        var height = Math.ceil(this.props.initHeight * scales[Device.kind]);
        return (
            <Image style={[{width: width, height: height}, this.props.style]} source={this.props.source}/>
        );
    }
});

module.exports = ResponsiveImage;
