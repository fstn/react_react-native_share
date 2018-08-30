//@flow
import React from 'react';
// $FlowFixMe
import './component.css';


class MyComponentNotShare extends React.Component {
  // noinspection JSUnusedLocalSymbols
  constructor(props, context) {
    super(props);
    this.setState({});
  }


  render(){
    return (
      <div className='component_not_share'>
        <div className='component_not_share__content'>
          Content
        </div>
      </div>
    );
  }

}


export default MyComponentNotShare;
