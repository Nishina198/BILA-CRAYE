import React, { Component } from 'react'
import ShowFullItemEng from './ShowFullItemEng'

export default class ItemsFull extends Component {
  render() {
    return (
        <div>
        {this.props.items.map(el => (
        <ShowFullItemEng key={el.id} item={el}/>
        ))}
      </div>
    )
  }
}
