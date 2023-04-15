import React, { Component } from 'react'

import MainHomePage from '../components/MainHomePage'
import FooterEng from './FooterEng'
import "../home.css"
import MainHomeEng from './MainHomeEng'


export default class HomeEng extends Component {
  render() {
    return (
      <div> 
        <MainHomeEng/>
        <MainHomePage/>
        <FooterEng/>
      </div>
    )
  }
}