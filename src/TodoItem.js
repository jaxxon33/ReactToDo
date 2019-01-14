import React, { Component } from 'react'

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '5px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markComplete = (e) => {
    console.log(this.props)
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />{' '}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}
