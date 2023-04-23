import React, { Component } from 'react'
import Header from "./components/Header"
import Items from "./components/Items"
import Footer from "./components/Footer"
import "./product.css"

export default class Hodie extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'BLACK TATTOO',
          img:'-902412790-1745095374.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 2,
          title:'BLACK WORD',
          img:'-165107151040483677.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 3,
          title:'WHITE SNOW ',
          img:'-945532885352711569.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 4,
          title:'PETROLEUM',
          img:'-4488736901184324516.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 5,
          title:'GRAPHITY',
          img:'1866891969-1615890617.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 6,
          title:'NEW COLLECTION HOODIE',
          img:'654537531725260223.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 7,
          title:'ORANGE & BLACK',
          img:'4393862681488671867.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        },
        {
          id: 8,
          title:'GREY DREAMS',
          img:'8070220231290672328.jpg',
          desc:'Материал:  хлопок, Натуральный материал Уникальный дизайн Большой капюшон',
          category:'hoodie',
          size:'S',
          price:'700₴'
        }
      ]
      
    }
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrders=this.deleteOrders.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrders}/>
      <p class="h_text">ХУДИ</p>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
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