import React, { Component } from 'react'
import check from './check.svg'
import delbtn from './delete.svg'

export class TodoItem extends Component {
  toggleItem(evt) {
    evt.preventDefault();
    this.props.onToggle(this.props.item)
  }

  remove(evt) {
    evt.preventDefault();
    this.props.onRemove(this.props.item)
  }

  render() {
    const {label, checked} = this.props.item
    return (
      <li className={"TodoItem"+(checked?' checked':'')}>
        { !checked ?
          (
            <img src={delbtn} alt="delete" className="svgBtn"
                 onClick={this.remove.bind(this)}/>
          ) : (
            <div className='blank'></div>
          )
        }
        <div className="label">{label}</div>
        <img src={check} alt="check" className="svgBtn" 
             onClick={this.toggleItem.bind(this)}/>
      </li>
    )
  }
}
