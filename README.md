# React Native Responsive Image

[![David](https://david-dm.org/dharmoslap/react-native-responsive-image.svg)](https://david-dm.org/dharmoslap/react-native-responsive-image)
[![npm](https://img.shields.io/npm/v/react-native-responsive-image.svg)](https://www.npmjs.com/package/react-native-responsive-image)
[![GitHub commits](https://img.shields.io/github/commits-since/dharmoslap/react-native-responsive-image/2.1.0.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dt/react-native-responsive-image.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-responsive-image)



React Native `<Image>` component, that rescales itselfs correctly on iOS and Android devices.

## Why?

React Native's Image size is rendered the same regardless of device size and resolution.
Desired behaviour in is to have a component, that scales appropriately.

## Installation

`npm install react-native-responsive-image --save`


## Usage


Use the `<ResponsiveImage>` component and set it's `initWidth` and `initHeight` props.

These values are used as they are for iPhone6 Plus, and they are scaled down on any smaller iOS/Android device.


## Example

Three images in one full-width row:

```javascript
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
```

## One image size?

We could have added support for multiple image sources, like [https://github.com/exponentjs/react-native-responsive-image]([https://github.com/exponentjs/react-native-responsive-image]) has.
It sounds like you would save some bytes by delivering less-resolution images to devices with lower resolution.

But solution that worked the best for me was different. Actually you need to serve just one high-resolution compressed, and it will even save more bytes. Though @2x or @3x images have more pixels, it’s surprising how much they can be compressed.

![Retina Compression](http://blog.teamtreehouse.com/wp-content/uploads/2014/12/jpeg-example.jpg)

## A static image to display while loading the image source?
```javascript
<ResponsiveImage
  source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} initWidth="138" initHeight="138"
  defaultSource={require('placeholder.png')} />
```

## Example project

### Create project

`create-react-native-app ResponsiveImageExample`

`cp ./example/App.js ./ResponsiveImageExample/App.js`

`cp -R ./src ./ResponsiveImageExample/src`

`cd ResponsiveImageExample`

`yarn start`


### Run on iOS

`yarn run ios`

### Run on Android

`yarn run android`

## Development

1. Modify any files in ./src directory

2. Propagate changes by `cp -R ./src ./ResponsiveImageExample/src`