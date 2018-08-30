//@flow
import React from 'react';
// $FlowFixMe
import style from './component.scss';
import {Text, View} from 'react-native';


class MyComponentNotShare extends React.Component {
  // noinspection JSUnusedLocalSymbols
  constructor(props, context) {
    super(props);
  }


  render(){
      console.log(style);
    return (
      <View style={style.component_not_share}>
        <View style={style.component_not_share__content}>
          <Text>Not shared content</Text>
        </View>
      </View>
    );
  }

}


export default MyComponentNotShare;
