import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResponsiveImage from './src/react-native-responsive-image';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <ResponsiveImage source={{ uri: 'https://github.com/Dharmoslap/react-native-responsive-image/raw/master/react_logo.png' }} initWidth="138" initHeight="138" />
        <ResponsiveImage source={{ uri: 'https://github.com/Dharmoslap/react-native-responsive-image/raw/master/react_logo.png' }} initWidth="138" initHeight="138" />
        <ResponsiveImage source={{ uri: 'https://github.com/Dharmoslap/react-native-responsive-image/raw/master/react_logo.png' }} initWidth="138" initHeight="138" />
      </View>);
  }
}