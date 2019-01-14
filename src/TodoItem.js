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

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}{' '}
                    <button onClick={this.props.delete.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
    }
}
