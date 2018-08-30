//@flow
import React from 'react';
// $FlowFixMe
import './component.css';
import style from './component.scss';
import {Text, View} from 'react-native';


class MyComponent extends React.Component {
  // noinspection JSUnusedLocalSymbols
  constructor(props, context) {
    super(props);
    if(window.mode === 'NATIVE'){
      this.render = this.renderNative;
    }else{
      this.render = this.renderWeb
    }
  }


  render(){}

  renderNative() {
    return (
      <View style={style.component}>
        <View style={style.component__content}>
          <Text>Content</Text>
        </View>
      </View>
    );
  }

  renderWeb() {
    return (
      <div className='component'>
        <div className='component__content'>
          Content
        </div>
      </div>
    );
  }

}


export default MyComponent;
