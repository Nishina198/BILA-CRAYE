import React, { Component } from 'react'
import{NavLink} from 'react-router-dom'
import '../basket.css'

export default class Order extends Component {
  
  render() {
    
    return (
      <div className='basket_item'>
        <NavLink to={'/item' + this.props.item.id}>
        <img className='basket_img' src={"./img/" + this.props.item.img} alt="hgfhgf" />
        </NavLink>
        <div id='div_qwert'>
          <div className='div_close'>
            <p id='basket_div_text'>{this.props.item.title}</p>
            <svg className='close' onClick={()=> this.props.onDelete(this.props.item.id)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1749 9.99999L14.7583 6.42499C14.9152 6.26807 15.0034 6.05524 15.0034 5.83333C15.0034 5.61141 14.9152 5.39858 14.7583 5.24166C14.6014 5.08474 14.3885 4.99658 14.1666 4.99658C13.9447 4.99658 13.7319 5.08474 13.5749 5.24166L9.99995 8.82499L6.42495 5.24166C6.26803 5.08474 6.0552 4.99658 5.83328 4.99658C5.61136 4.99658 5.39854 5.08474 5.24162 5.24166C5.0847 5.39858 4.99654 5.61141 4.99654 5.83333C4.99654 6.05524 5.0847 6.26807 5.24162 6.42499L8.82495 9.99999L5.24162 13.575C5.16351 13.6525 5.10151 13.7446 5.05921 13.8462C5.0169 13.9477 4.99512 14.0566 4.99512 14.1667C4.99512 14.2767 5.0169 14.3856 5.05921 14.4871C5.10151 14.5887 5.16351 14.6809 5.24162 14.7583C5.31908 14.8364 5.41125 14.8984 5.5128 14.9407C5.61435 14.983 5.72327 15.0048 5.83328 15.0048C5.94329 15.0048 6.05221 14.983 6.15376 14.9407C6.25531 14.8984 6.34748 14.8364 6.42495 14.7583L9.99995 11.175L13.5749 14.7583C13.6524 14.8364 13.7446 14.8984 13.8461 14.9407C13.9477 14.983 14.0566 15.0048 14.1666 15.0048C14.2766 15.0048 14.3855 14.983 14.4871 14.9407C14.5886 14.8984 14.6808 14.8364 14.7583 14.7583C14.8364 14.6809 14.8984 14.5887 14.9407 14.4871C14.983 14.3856 15.0048 14.2767 15.0048 14.1667C15.0048 14.0566 14.983 13.9477 14.9407 13.8462C14.8984 13.7446 14.8364 13.6525 14.7583 13.575L11.1749 9.99999Z" fill="#231F20"/>
              </svg>
              </div>
            <p className='size_basket1'>Size:</p>
            <div id='size_basket' className='size_basket'>{this.props.item.size}</div>
            <p className='size_basket'>Number:</p>
            <div id='price_and_text'><div className='numbers'><p className='numbers1'>-</p><p className='numbers1'>1</p><p className='numbers1'>+</p></div>
            <p className='div_basket_price'>{this.props.item.price}</p></div>
            
        </div>
        
        
    </div>
    )
  }
}
