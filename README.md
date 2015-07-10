# React Native Responsive Image

React Native `<Image>` component, that resizes itself appropriately on all different iOS screens. 

##Why?

React Native's Image size is rendered the same for iPhone4/5, iPhone6 and iPhone6 Plus. 
Desired behaviour in is to have a component, that scales relatively.

##Installation

`npm install react-native-responsive-image --save`

##Usage


Use the `<ResponsiveImage>` component and set it's `initWidth` and `initHeight` props. 

These values are used as they are on iPhone6 Plus, and they are scaled down for iPhone4/5/6.


##Example

Four images in one full-width row:

```javascript
var React = require('react-native');
var ResponsiveImage = require('react-native-responsive-image');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var App = React.createClass({
  render: function() {
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

AppRegistry.registerComponent('AwesomeProject', () => App);
```

##One image size?

We could have added support for multiple image sources, like [https://github.com/exponentjs/react-native-responsive-image]([https://github.com/exponentjs/react-native-responsive-image]) has.
It sounds like you would save some bytes by delivering less-resolution images to devices with lower resolution. 

But solution that worked the best for me was different. Actually you need to serve just one high-resolution compressed, and it will even save more bytes. Though @2x or @3x images have more pixels, it’s surprising how much they can be compressed.

![Retina Compression](http://blog.teamtreehouse.com/wp-content/uploads/2014/12/jpeg-example.jpg)


##Todo

- Universal for iPhone and iPad (like [https://github.com/GertjanReynaert/react-native-universal](https://github.com/GertjanReynaert/react-native-universal)

- Suggestions and issues are always welcome!!