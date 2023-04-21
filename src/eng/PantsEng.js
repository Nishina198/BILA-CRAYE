import React, { Component } from 'react'

import "../product.css"
import HeaderEng from './HeaderEng'
import FooterEng from './FooterEng'
import ItemsEng from './ItemsEng'

export default class PantsEng extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'GRAY STYLE',
          img:'-1070323055-1396189844.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 2,
          title:'DARK GRAY',
          img:'-2045732009756782467.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 3,
          title:'LIGHT GRAY',
          img:'-11561946324083130.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 4,
          title:'BLUE CELL',
          img:'-1762710762247002176.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 5,
          title:'BLUE STYLE',
          img:'-7155666881226592906.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 6,
          title:'DARK SOUL',
          img:'-113814432-785795028.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 7,
          title:'BLACK STYLE ',
          img:'15172432072006837736.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
        },
        {
          id: 8,
          title:'GRAY STYLE',
          img:'-14055122452091070955.jpg',
          desc:'Материал:  Эко-Кожа Количество отделений - 3 Натуральный материал Усиленная ручка',
          category:'pants',
          size:'S',
          price:'500₴'
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
      <p class="h_text">PANTS</p>
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