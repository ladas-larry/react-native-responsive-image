var React = require('react-native');
var Device = require('react-native-device');


var {
    Image,
    } = React;

var ResponsiveImage = React.createClass({
    render: function () {
        var scales = {
            iPhone4: 1,
            iPhone5: 1,
            iPhone6: 1.171875,
            iPhone6plus: 1.299
        };
        var width = this.props.initWidth * scales[Device.kind];
        var height = this.props.initHeight * scales[Device.kind];
        return (
            <Image style={[{width: width, height: height}, this.props.style]} source={this.props.source}/>
        );
    }
});

module.exports = ResponsiveImage;
