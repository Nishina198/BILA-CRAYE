import React, { Component } from 'react'
import Item from '../components/Item'
import "../product.css"
import "../basket.css"
export class ItemsUkr extends Component {
  render() {


    
    
    return (
      <main className='main'>
        
        <div class="text_new">
            <span class="left_menu">
                <span><p class="characteristics1">СОРТИРУВАТИ ЗА</p>
                  <svg class="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_280)">
                    <path d="M11 7L6 12L1 7L1.8875 6.1125L6 10.225L10.1125 6.1125L11 7Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_280">
                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                    </clipPath>
                    </defs>
                  </svg></span>
                <span><p class="characteristics1">РОЗМІР</p><svg class="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_280)">
                    <path d="M11 7L6 12L1 7L1.8875 6.1125L6 10.225L10.1125 6.1125L11 7Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_280">
                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                    </clipPath>
                    </defs>
                  </svg></span>
                <span><p class="characteristics1">КОЛІР</p><svg class="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_280)">
                    <path d="M11 7L6 12L1 7L1.8875 6.1125L6 10.225L10.1125 6.1125L11 7Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_280">
                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                    </clipPath>
                    </defs>
                  </svg></span>
            </span>
            <span class="serch_menu">
                    
                    <p id="stuff" class="characteristics">8 речей</p>
                    <svg id='cursor' class="right_span"width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="14" height="14" rx="0.5" stroke="black"/>
                    </svg>
                    <svg id='cursor' class="right_span" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="6" height="6" rx="0.5" stroke="black"/>
                    <rect x="8.5" y="0.5" width="6" height="6" rx="0.5" stroke="black"/>
                    <rect x="0.5" y="8.5" width="6" height="6" rx="0.5" stroke="black"/>
                    <rect x="8.5" y="8.5" width="6" height="6" rx="0.5" stroke="black"/>
                    </svg>
                    
            </span>
        </div>
        <div className='products'>
          {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
          ))}
        </div>
        <div className='div_page'>
          
        <div className='page1'><span className='textB'>1</span></div>
            <div className='page'><span  className='textA'>2</span></div>
            <div className='page'><span  className='textA'>3</span></div>
            <div className='page'><span  className='textA'>4</span></div>
            <div className='page'><span  className='textA'>5</span></div>
            <div className='page'><span  className='textA'>...</span></div>
          
        </div>
    </main>
    )
  }
}

export default ItemsUkr