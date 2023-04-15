import React, { Component } from 'react'

import "../product.css"
import FooterEng from './FooterEng'
import HeaderEng from './HeaderEng'
import ItemsEng from './ItemsEng'

export default class TshirtEng extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'SUMMER T-SHIRT',
          img:'-602844623457479526.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 2,
          title:'BLACK & YELLOW T-SHIRT',
          img:'-1995413481123162264.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 3,
          title:'GREY & WHITE T-SHIRT',
          img:'-15538552941927380535 (1).jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 4,
          title:'BLACK & WHITE T-SHIRT',
          img:'526906023-1024446149.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 5,
          title:'T-SHIRT WITH SUSPENSION',
          img:'1230374500-595929870.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 6,
          title:'BLACK T-SHIRT',
          img:'7527081321177755087.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 7,
          title:'T-SHIRT WITH PICTURE',
          img:'14304847871411242025.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
        },
        {
          id: 8,
          title:'GREY T-SHIRT',
          img:'-2056264520-1175268814.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'backpacks',
          size:'S',
          price:'300₴'
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
      <p class="h_text">T-SHIRT</p>
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