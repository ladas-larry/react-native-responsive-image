# React Native Responsive Image

Simple React Native component, that resizes images for all diferrent iPhone display widths. 

##Why?

Problem is that ract native units for image size are rendered in the way for iPhone4/5, iPhone6 and iPhone6 Plus. Thought desired behaviour in the real app is to have images that scales to the certain width, so they wouldn't breat the layout on different iPhones.


##Usage

All you need to do is download the component's code, require the compenent and then set it's `initWidth` and `initHeight` props. This values stays the same on iPhone4/5 and the are correctly
increased for iPhone6 and iPhone6 Plus.


```
var React = require('react-native');
var ResponsiveImage = require('./ResponsiveImage');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ResponsiveImage source={{uri: 'http:' + item.profile_picture.href}} initWidth="80" initHeight="80" item={item} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


```

##Todo

- npm package

- iPad version