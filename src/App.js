import React, {Component} from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import './App.css';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

class App extends Component{
  state = {
    todos: [{
      id: uuid(),
      title: "first",
      completed: false
    },
    {
      id: uuid(),
      title: "second",
      completed: false
    },
    {
      id: uuid(),
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

  addTodo = (title) => {
    const newTodo = {
      'id': uuid(),
      'title': title,
      'completed': false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render(){
    return (

      <div className="App">
        <div className="Container">
        <Header/>
        <AddTodo addTodo = {this.addTodo} />
        <Todos todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
      </div>
    );
  }
}

export default App;
