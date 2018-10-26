import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestStateComponent from './TestStateComponent';
import TestFunctionalComponents from './TestFunctionalComponents';

import './App.css';

class App extends Component <{}> {
  render() {
    return (
      <div className="App">
        <TestComponent name={'LiteCoin'} quantity={1}/>
        <TestStateComponent initial ={10} />
        <TestFunctionalComponents date={'26 Oct 2018'}/>
      </div>
    );
  }
}
 
export default App;
