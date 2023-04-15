import React, { Component } from 'react'
import Footer from './components/Footer'
import MainHome from './components/MainHome'
import MainHomePage from './components/MainHomePage'
import "./home.css"


export default class Home extends Component {
  render() {
    return (
      <div> 
        <MainHome/>
        <MainHomePage/>
        <Footer/>
      </div>
    )
  }
}
