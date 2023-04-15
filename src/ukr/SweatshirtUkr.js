import React, { Component } from 'react'

import "../product.css"

import FooterUkr from './FooterUkr'

import HeaderUkr from './HeaderUkr'

import ItemsUkr from './ItemsUkr'

export default class SwearshirtUkr extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'WHITE SWEATSHIRT WITH M',
          img:'-381954658-481120544.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 2,
          title:'BLACK PLANET',
          img:'-902197276-2014303722.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 3,
          title:'BLACK NIGHT',
          img:'-1090281244-1815365231.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 4,
          title:'GEOMETRIC SWEATSHIRT',
          img:'-1992563548-259453155.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 5,
          title:'MARRY CHRISTMAS SWEATSHIRT',
          img:'-27933833388615573.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 6,
          title:'THPSAFER MODEL',
          img:'302997125-744035626.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 7,
          title:'NIGHT CITY',
          img:'518023733-982085658.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 8,
          title:'BLACK DR SWEATSHIRT',
          img:'960811748-1667916781.jpg',
          desc:'Материал:  хлопок, эластан Натуральный материал Уникальный дизайн',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        }
      ]
      
    }
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrders=this.deleteOrders.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
      <HeaderUkr orders={this.state.orders} onDelete={this.deleteOrders}/>
      <p class="h_text">СВІТШОТИ</p>
      <ItemsUkr items={this.state.items} onAdd={this.addToOrder}/>
      <FooterUkr />
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