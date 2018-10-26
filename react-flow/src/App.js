import React, { Component } from 'react';
import TestComponent from './TestComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponent name={'React Flow'} quantity={23}/>
      </div>
    );
  }
}
 
export default App;
