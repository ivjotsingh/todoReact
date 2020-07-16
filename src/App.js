import React, {Component} from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
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
      completed: false
    },
    {
      id: 3,
      title: "third",
      completed: false
    }],
    xyz: {}
  }
  markComplete = (id) => {
    this.setState(
      {todos: this.state.todos.map(
          (todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed
            }
            return todo}
        )
      }
    )
   
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
    );
  }
}

export default App;
