import React from 'react';
import './App.css';
import {MyComponent} from 'share';
import MyComponentNotShare from './component_not_share/component';

class App extends React.Component {
    render() {
        return (
            <div>
                <MyComponent/>
                <MyComponentNotShare/>
            </div>
        );
    }
}

export default App;
