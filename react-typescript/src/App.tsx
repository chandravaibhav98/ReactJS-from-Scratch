import React, { Component } from 'react';
import './App.css';
import MyClass from './Components/MyClass';
import MyComp from './Components/MyComp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi</h1>
                <MyClass isMarried={true} />
                <MyComp name={'chandravaibhav98'} isMarried={true} kids={0} livedin='Delhi | Mumbai | Bengaluru | Singapore '/>
            </div>
        );
    }
}

export default App;