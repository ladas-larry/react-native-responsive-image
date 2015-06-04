# React Native Responsive Image

React Native <Image> component, that resizes itself appropriately on all different iOS screens. 

##Why?

React Native <Image> size is rendered the same for iPhone4/5, iPhone6 and iPhone6 Plus. 
Desired behaviour in the real world is to have <Image> component, that scales relatively.

##Installation

`npm install react-native-responsive-image --save`

##Usage


Use the <ResponsiveImage> component and set it's `initWidth` and `initHeight` props. 

These values are used as they are on iPhone6 Plus, and they are scaled down for iPhone4/5/6.


##Example

```javascript
var React = require('react-native');
var ResponsiveImage = require('./ResponsiveImage');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var ResponsiveImage = React.createClass({
  render: function() {
    return (
      <View style={{flex: 1, justifyContent: 'center',}}>
        <ResponsiveImage source={{uri: 'http:' + item.profile_picture.href}} initWidth="80" initHeight="80" item={item} />
      </View>
    );
  }
});

AppRegistry.registerComponent('AwesomeProject', () => ResponsiveImage);
```

##Todo

- iPad version