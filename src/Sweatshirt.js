import React, { Component } from 'react'
import Header from "./components/Header"
import Items from "./components/Items"
import Footer from "./components/Footer"
import "./product.css"

export default class Swearshirt extends Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title:'WHITE SWEATSHIRT WITH M',
          img:'-381954658-481120544.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 2,
          title:'BLACK PLANET',
          img:'-902197276-2014303722.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 3,
          title:'BLACK NIGHT',
          img:'-1090281244-1815365231.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 4,
          title:'GEOMETRIC SWEATSHIRT',
          img:'-1992563548-259453155.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 5,
          title:'MARRY CHRISTMAS SWEATSHIRT',
          img:'-27933833388615573.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 6,
          title:'THPSAFER MODEL',
          img:'302997125-744035626.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 7,
          title:'NIGHT CITY',
          img:'518023733-982085658.jpg',
          category:'swearshirt',
          size:'S',
          price:'600₴'
        },
        {
          id: 8,
          title:'BLACK DR SWEATSHIRT',
          img:'960811748-1667916781.jpg',
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
      <Header orders={this.state.orders} onDelete={this.deleteOrders}/>
      <p class="h_text">СВИТШОТЫ</p>
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