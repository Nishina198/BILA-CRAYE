import React, { Component } from 'react'


export class ProductItem extends Component {
  render() {
    return (
      <div className='item'>
        <div className='div_img'>
          <img src={"./img/" + this.props.item.img} alt="hgfhgf" />
        </div>
        <div className='item_descr'>
          <a href='/' className='title'>{this.props.item.title}</a>
          <p className='price'>{this.props.item.price}</p>
        </div>
      </div>
    )
  }
}

export default ProductItem