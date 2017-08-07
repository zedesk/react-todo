import React, { Component } from 'react';

class Toolbar extends Component {
  toggleNav(evt) {
    evt.preventDefault();
    this.props.onToggleNav()
  }

  render() {
    return (
      <div className="toolbar">
        <i className="fa fa-bars" onClick={this.toggleNav.bind(this)}></i>
        <div className="title">Todo App</div>
      </div>
    );
  }
}

export default Toolbar;