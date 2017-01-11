'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center',}}>
                <View style={{flexDirection: 'row',}}>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                    <ResponsiveImage source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"/>
                </View>
            </View>
    );
  }
}

AppRegistry.registerComponent('ResponsiveImageExample', () => App);

