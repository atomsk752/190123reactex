import React, { Component } from 'react';
import Counter from './comp1/Counter'
import SampleList from './comp1/SampleList'
import RefOuter2 from "./comp3/RefOuter2";
import TodoComponent from './comp4/TodoComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoComponent/>
          <RefOuter2/>
          <Counter amount={1}/>
          <Counter amount={10}/>
          <Counter amount={100}/>
          <Counter amount={1000}/>
          <SampleList/>
      </div>

    );
  }
}

export default App;
