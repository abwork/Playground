import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestStateComponent from './TestStateComponent';
import './App.css';

class App extends Component <{}> {
  render() {
    return (
      <div className="App">
        <TestComponent name={'LiteCoin'} quantity={1}/>
        <TestStateComponent initial ={10} />
      </div>
    );
  }
}
 
export default App;
