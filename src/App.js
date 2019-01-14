import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take trash',
        completed: false
      },
      {
        id: 2,
        title: 'Take rubbish out',
        completed: false
      },
      {
        id: 3,
        title: 'Take garbage',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)
      ]
    })
  }


  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
      </div>
    );
  }
}


