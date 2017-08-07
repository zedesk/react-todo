import React, { Component } from 'react'
import './App.css'
import Toolbar from './toolbar.js'
import { TodoInput } from './todoInput'
import { TodoList } from './todoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todoItems: [],
      seed: 0,
      drawer: false
    }
  }

  addItem(item) {
    const {todoItems, seed} = this.state;
    const newItem = { label: item, id: seed+1 }
    this.setState( {
      todoItems: [...todoItems, newItem],
      seed: this.state.seed+1
    })
  }

  removeItem(item) {
    const {todoItems} = this.state;
    const indx = todoItems.indexOf(item);
    todoItems.splice(indx,1)
    this.setState( {
      todoItems: todoItems
    })
  }

  toggleItem(item) {
    const {todoItems} = this.state;
    const indx = todoItems.indexOf(item);
    todoItems[indx].checked = !todoItems[indx].checked
    this.setState( {
      todoItems: todoItems
    })
  }

  toggleNav() {
    const {drawer} = this.state;
    this.setState({ drawer: !drawer})
  }

  render() {
    const {todoItems, drawer} = this.state
    return (
      <div className="App">
        <nav hidden={!drawer}>
          <i className="fa fa-arrow-left"></i>
          <span>test</span>
        </nav>
        <main>
          <Toolbar />
          <TodoInput onAdd={this.addItem.bind(this)}/>
          <TodoList todoItems={todoItems} 
            onRemove={this.removeItem.bind(this)}
            onToggle={this.toggleItem.bind(this)}/>
        </main>
      </div>
    );
  }
}

export default App;
