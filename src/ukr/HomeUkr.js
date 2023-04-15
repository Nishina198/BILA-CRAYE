import React, { Component } from 'react'

import MainHomePage from '../components/MainHomePage'

import "../home.css"

import MainHomeUkr from './MainHomeUkr'
import FooterUkr from './FooterUkr'


export default class HomeUkr extends Component {
  render() {
    return (
      <div> 
        <MainHomeUkr/>
        <MainHomePage/>
        <FooterUkr/>
      </div>
    )
  }
}