import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class MainProduct extends Component {
  render() {
    return (
      <div>
        <div className='products'>
          {this.props.items.map(el => (
          <ProductItem key={el.id} item={el}/>
          ))}
        </div>
        <line></line>
        <p>Размер:</p>
        <div className='size'></div>
        <button>Добавить в корзину</button>
        <div>БОЛЬШЕ ИНФОРМАЦИИ <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.35005 5L7.17505 6.175L10.9917 10L7.17505 13.825L8.35005 15L13.35 10L8.35005 5Z" fill="black"/>
        </svg></div>
        </div>
    )
  }
}
