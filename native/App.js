import React from 'react';
import {MyComponent} from 'share';
import MyComponentNotShare from './component_not_share/component';
import {View} from 'react-native';
window.mode= 'NATIVE';

export default class App extends React.Component {
  render() {
    return (
        <View>
            Test
        <MyComponent/>
        <MyComponentNotShare/>
        </View>
    );
  }
}

