import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './todo'

export class TodoList extends Component {
  removeItem(item) {
    this.props.onRemove(item)
  }

  toggleItem(item) {
    this.props.onToggle(item)
  }

  render() {
    const {todoItems} = this.props;
    return (
      <ul className="TodoList">
        { 
          todoItems.map( (item) => {
            return (
              <TodoItem key={item.id} item={item}
                 onRemove={this.removeItem.bind(this)}
                 onToggle={this.toggleItem.bind(this)}/>
              )
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todoItems : PropTypes.array.isRequired
}

