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
        completed: true
      },
      {
        id: 3,
        title: 'Take garbage',
        completed: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}


