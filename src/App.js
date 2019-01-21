import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';
import uuid from 'uuid'

export default class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take rubbish out',
        completed: false
      },
      {
        id: uuid.v4(),
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

  // TODO: fix this so logs value from form
  addTodo = (e) => {
    e.preventDefault()
    console.log(e.target)
    this.setState({
      todos: [...this.state.todos,
      {
        id: uuid.v4(),
        title: this.state.title,
        completed: false
      }],
      title: ''
    })
  }

  // update state as input changes
  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
        <form onSubmit={this.addTodo}>
          <input type="text" name="title" placeholder="Add todo" value={this.state.title} onChange={this.onChange} />
          <input type="submit" value="Add!"></input>
        </form>
      </div>
    );
  }
}


