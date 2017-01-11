var React = require('react');
var applyScale = require('./applyScale');
var { Image } = require('react-native');

var ResponsiveImage = React.createClass({
    setNativeProps: function(nativeProps) {
        this._root.setNativeProps(nativeProps);
    },
    render: function () {
        var width = applyScale(this.props.initWidth);
        var height = applyScale(this.props.initHeight);
        return (
            <Image style={[{width: width, height: height}, this.props.style]}
                   source={this.props.source}
                   ref={component => this._root = component}
                   resizeMode={this.props.resize ? 'contain' : 'stretch'}>
                {this.props.children}
            </Image>
        );
    }
});

module.exports = ResponsiveImage;
