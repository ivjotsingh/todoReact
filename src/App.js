import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component{
  state = {
    todos: [{
      id: 1,
      title: "first",
      completed: false
    },
    {
      id: 2,
      title: "second",
      completed: true
    },
    {
      id: 3,
      title: "third",
      completed: false
    }],
    xyz: {}

  }
  render(){
    return (
      <div className="App">
        <h1>APP</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
