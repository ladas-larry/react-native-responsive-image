/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react');
var {
    AppRegistry,
    StyleSheet,
    View,
    } = require('react-native');
    
var ResponsiveImage = require('react-native-responsive-image');



var App = React.createClass({
    render: function () {
        return (
            <View style={{flex: 1, justifyContent: 'center',}}>
                <View style={{flexDirection: 'row',}}>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                </View>
            </View>
        );
    }
});

AppRegistry.registerComponent('ResponsiveImageExample', () => App);
