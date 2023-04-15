
import React, { Component } from 'react'

import{Routes, Route} from 'react-router-dom'
import FAQEng from './eng/FAQEng'
import HomeEng from './eng/HomeEng'
import HodieEng from './eng/HoodieEng'

import NewEng from './eng/NewEng'
import PantsEng from './eng/PantsEng'
import ShoesEng from './eng/ShoesEng'
import SwearshirtEng from './eng/SweatshirtEng'
import TshirtEng from './eng/TshirtEng'

import Faq from './Faq'
import Home from './Home'
import Hodie from './Hoodie'
import New from './New'
import Pants from './Pants'
import Shoes from './Shoes'
import Sweatshirt from './Sweatshirt'
import Tshirt from './Tshirt'
import FAQUkr from './ukr/FAQUkr'
import HomeUkr from './ukr/HomeUkr'
import HodieUkr from './ukr/HoodieUkr'
import NewUkr from './ukr/NewUkr'
import PantsUkr from './ukr/PantsUkr'
import ShoesUkr from './ukr/ShoesUkr'
import SwearshirtUkr from './ukr/SweatshirtUkr'
import TshirtUkr from './ukr/TshirtUkr'



export default class Ccomponents extends Component {
  
  

  render() {
    return (
      <>
      
      <Routes>
        <Route path='/' element={<HomeEng/>}/>
        <Route path='/new' element={<NewEng/>}/>
        <Route path='/faq' element={<FAQEng/>}/>
        <Route path='/tshirt' element={<TshirtEng/>}/>
        <Route path='/sweatshirt' element={<SwearshirtEng/>}/>
        <Route path='/hodie' element={<HodieEng/>}/>
        <Route path='/pants' element={<PantsEng/>}/>
        <Route path='/shoes' element={<ShoesEng/>}/>
        
        <Route path='/rus' element={<Home/>}/>
        <Route path='/new.rus' element={<New/>}/>
        <Route path='/faq.rus' element={<Faq/>}/>
        <Route path='/tshirt.rus' element={<Tshirt/>}/>
        <Route path='/sweatshirt.rus' element={<Sweatshirt/>}/>
        <Route path='/hodie.rus' element={<Hodie/>}/>
        <Route path='/pants.rus' element={<Pants/>}/>
        <Route path='/shoes.rus' element={<Shoes/>}/>
        <Route path='/ukr' element={<HomeUkr/>}/>
        <Route path='/new.ukr' element={<NewUkr/>}/>
        <Route path='/faq.ukr' element={<FAQUkr/>}/>
        <Route path='/tshirt.ukr' element={<TshirtUkr/>}/>
        <Route path='/sweatshirt.ukr' element={<SwearshirtUkr/>}/>
        <Route path='/hodie.ukr' element={<HodieUkr/>}/>
        <Route path='/pants.ukr' element={<PantsUkr/>}/>
        <Route path='/shoes.ukr' element={<ShoesUkr/>}/>
      </Routes>
      
      </>
    )
  }
}


