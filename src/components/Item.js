import React, { Component } from 'react'
import "../product.css"


export class Item extends Component {
  render() {
    return (
      
      <div className='item'>
        <div className='div_img'>
        
          <img src={"./img/" + this.props.item.img} alt="hgfhgf" />
        
        </div>
        
        <div className='item_descr'>
          <span className='title'>{this.props.item.title}</span>
          <p className='price'>{this.props.item.price}</p>
          <div className='red' onClick={()=> this.props.onAdd(this.props.item)}><p className='plus'>+</p></div>
        </div>
      </div>
      
    )
  }
}

export default Item