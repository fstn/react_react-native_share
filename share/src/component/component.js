// @flow
import React from 'react';

// $FlowFixMe
import './component.scss';

import style from './component.scss';


class MyComponent extends React.Component {
  // noinspection JSUnusedLocalSymbols
  constructor(props, context) {
    super(props);
    console.log(style);
    if(window.mode === 'NATIVE'){
      this.render = this.renderNative;
    }else{
      this.render = this.renderWeb
    }
  }


  render(){}

  renderNative() {
    return (
      <window.View style={style.component}>
          <window.Text style={style.component__content}>Shared Content for native</window.Text>
      </window.View>
    );
  }


  renderWeb() {
    return (
      <div class='component'>
        <div class='component__content'>
          Shared Content for web
        </div>
      </div>
    );
  }
}

export default MyComponent;
