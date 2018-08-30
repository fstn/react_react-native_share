import React from 'react';
import {MyComponent} from 'share';
import MyComponentNotShare from './component_not_share/component';
import {View,Text} from 'react-native';
window.mode= 'NATIVE';
window.View= View;
window.Text= Text;


export default class App extends React.Component {
  render() {
    return (
        <View style={{marginTop:50}}>
            Test
        <MyComponent/>
        <MyComponentNotShare/>
        </View>
    );
  }
}

