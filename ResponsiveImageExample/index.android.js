/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ResponsiveImage = require('react-native-responsive-image');
var {
    AppRegistry,
    StyleSheet,
    View,
    } = React;


var App = React.createClass({
    render: function () {
        return (
            <View style={{flex: 1, justifyContent: 'center',}}>
                <View style={{flexDirection: 'row',}}>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="103.5" initHeight="103.5" style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                    }}/>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="103.5" initHeight="103.5" style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                    }}/>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="103.5" initHeight="103.5" style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                    }}/>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="103.5" initHeight="103.5" style={{
                        borderWidth: 1,
                        borderColor: '#ffffff',
                    }}/>
                </View>
            </View>
        );
    }
});

AppRegistry.registerComponent('ResponsiveImageExample', () => App);
