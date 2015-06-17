var React = require('react-native');
var Device = require('./device');


var {
    Image,
    } = React;

var ResponsiveImage = React.createClass({
    render: function () {
        var width = Math.ceil(this.props.initWidth * Device.scale);
        var height = Math.ceil(this.props.initHeight * Device.scale);
        return (
            <Image style={[{width: width, height: height}, this.props.style]} source={this.props.source}/>
        );
    }
});

module.exports = ResponsiveImage;
