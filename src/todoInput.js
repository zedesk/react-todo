import React, { Component } from 'react'

export class TodoInput extends Component {
  addItem(evt) {
    if (evt) evt.preventDefault();
    const newItem = this.textInput.value;
    if(newItem) {
      this.props.onAdd(newItem)
    }
    this.textInput.value = ""
  }

  handleKeyPress(evt) {
    if(evt.key === 'Enter') {
      this.addItem()
    }
  }

  render() {
    return (
      <div className="TodoInput">
        <input ref={(input) => { this.textInput = input; }} 
               type="text" autoFocus onKeyPress={this.handleKeyPress.bind(this)} />
        <button onClick={this.addItem.bind(this)}>add</button>
      </div>
    )
  }
}