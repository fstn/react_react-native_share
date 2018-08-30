//@flow
import React from 'react';
// $FlowFixMe
import './component.css';
import style from './component.scss';


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
      <window.View style={style.component}>
        <window.View style={style.component__content}>
          <window.Text>Shared Content</window.Text>
        </window.View>
      </window.View>
    );
  }

  renderWeb() {
    return (
      <div className='component'>
        <div className='component__content'>
          Shared Content
        </div>
      </div>
    );
  }
}

export default MyComponent;
