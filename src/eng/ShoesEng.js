import React, { Component } from 'react'

import "../product.css"
import FooterEng from './FooterEng'
import HeaderEng from './HeaderEng'
import ItemsEng from './ItemsEng'

export default class ShoesEng extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'GYM SNEAKERS',
          img:'-898404179-608023603.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 2,
          title:'LACED SNEAKERS',
          img:'-925166893-633790708.jpg',
          desc:'Материал:  хлопок, резина Качество носки: идеальное Натуральный материал Прочная подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 3,
          title:'GYM SNEAKERS WHITE',
          img:'-3780002281256927875.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 4,
          title:'WHITE SNEAKERS',
          img:'20219423351266261802.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Гладкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 5,
          title:'BLACK BIG SNEAKERS',
          img:'Picsart_22-12-25_17-22-50-163.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 6,
          title:'UNUSUAL SOLE',
          img:'Picsart_22-12-25_17-23-16-856.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 7,
          title:'WHITE RUN SNEAKERS',
          img:'Picsart_22-12-25_17-23-46-774.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        },
        {
          id: 8,
          title:'GRAY & WHITE SOLE',
          img:'Picsart_22-12-25_17-24-04-979.jpg',
          desc:'Материал: хлопок Носибельность: идеальная Натуральный материал Мягкая подошва',
          category:'sneakers',
          size:'41',
          price:'900₴'
        }
      ]
      
    }
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrders=this.deleteOrders.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
      <HeaderEng orders={this.state.orders} onDelete={this.deleteOrders}/>
      <p class="h_text">SHOES</p>
      <ItemsEng items={this.state.items} onAdd={this.addToOrder}/>
      <FooterEng />
      </div>
    )
  }
  deleteOrders(id){
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }
  addToOrder(item){
    let insArray = false
    this.state.orders.forEach(el=>{
      if(el.id===item.id)
      insArray = true
    })
    if(!insArray)
    this.setState({orders:[...this.state.orders, item]})
  }

}