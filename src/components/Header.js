import React, { useState } from 'react'
import '../registration.css'
import{NavLink} from 'react-router-dom'
import '../product.css'
import '../basket.css'
import '../language.css'
import { CSSTransition } from 'react-transition-group';
import Order from '../components/Order'

export default function Header(props) {
  const[registrationActive, setRegistrationActive]=useState(false)
  const[basketActive, setBasketActive]=useState(false)
  const[languageActive, setLanguageActive]=useState(false)
  const[menuActive, setmenuActive]=useState(false)

    if(basketActive ){
      document.body.classList.add('active-modal1')
      
    }else{
      document.body.classList.remove('active-modal1')
    }
    if(registrationActive ){
      document.body.classList.add('active-modal')
      
    }else{
      document.body.classList.remove('active-modal')
      
    }
    if(languageActive ){
      document.body.classList.add('active-modal2')
       
    }else{
      document.body.classList.remove('active-modal2')
    }
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <>
    <header>
      
        <div class="div_top"> 
            <NavLink to="/rus" id="global_text">BILA CRAYE</NavLink> 
            <div class="line"></div> 
                <div align="center" className="nav_menu"> 
                    <NavLink to="/new.rus"id='new' class="spn_nav">НОВОЕ</NavLink>
                    <NavLink to="/tshirt.rus"id='tshirt'class="spn_nav"> ФУТБОЛКИ</NavLink> 
                    <NavLink to="/sweatshirt.rus"id='sweatshirt'class="spn_nav">СВИТШОТЫ</NavLink>
                    <NavLink to="/hodie.rus"id='hodie'class="spn_nav">ХУДИ</NavLink>
                    <NavLink to="/pants.rus"id='pants'class="spn_nav">ШТАНЫ</NavLink>
                    <NavLink to="/shoes.rus"id='backpacs'class="spn_nav">ОБУВЬ</NavLink>
                    <NavLink to='/faq.rus' id="faq">FAQ</NavLink>
                    <span onClick={()=> setLanguageActive(!languageActive)} id="div_right" className="spn_nav_left">RUS</span> 
                    
                    
                    <span onClick={()=> setRegistrationActive(!registrationActive)} class="spn_nav_left" id="log" >
                      <svg className='pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M17.2938 15.0621C16.8423 14.0546 16.1871 13.1393 15.3646 12.3675C14.5446 11.5934 13.5733 10.9762 12.5042 10.55C12.4947 10.5455 12.4851 10.5432 12.4755 10.5387C13.9667 9.52399 14.9361 7.87111 14.9361 6.00627C14.9361 2.91699 12.2792 0.414001 9 0.414001C5.72077 0.414001 3.06387 2.91699 3.06387 6.00627C3.06387 7.87111 4.03328 9.52399 5.52449 10.541C5.51492 10.5455 5.50534 10.5477 5.49577 10.5522C4.42343 10.9784 3.46121 11.5895 2.63541 12.3697C1.81371 13.1422 1.15857 14.0573 0.706172 15.0644C0.261734 16.0504 0.0220377 17.1075 5.98544e-05 18.1785C-0.00057901 18.2025 0.00390188 18.2265 0.0132386 18.2489C0.0225753 18.2713 0.036579 18.2917 0.0544243 18.309C0.0722696 18.3262 0.0935956 18.3399 0.117146 18.3492C0.140696 18.3586 0.165993 18.3634 0.191548 18.3634H1.62771C1.73303 18.3634 1.8168 18.2845 1.8192 18.1875C1.86707 16.4467 2.60908 14.8163 3.92078 13.5806C5.27795 12.3021 7.08033 11.5985 9 11.5985C10.9197 11.5985 12.722 12.3021 14.0792 13.5806C15.3909 14.8163 16.1329 16.4467 16.1808 18.1875C16.1832 18.2867 16.267 18.3634 16.3723 18.3634H17.8085C17.834 18.3634 17.8593 18.3586 17.8829 18.3492C17.9064 18.3399 17.9277 18.3262 17.9456 18.309C17.9634 18.2917 17.9774 18.2713 17.9868 18.2489C17.9961 18.2265 18.0006 18.2025 17.9999 18.1785C17.976 17.1006 17.739 16.0521 17.2938 15.0621ZM9 9.88478C7.90134 9.88478 6.8673 9.48114 6.08938 8.74829C5.31146 8.01543 4.88301 7.04129 4.88301 6.00627C4.88301 4.97125 5.31146 3.99711 6.08938 3.26425C6.8673 2.5314 7.90134 2.12776 9 2.12776C10.0987 2.12776 11.1327 2.5314 11.9106 3.26425C12.6885 3.99711 13.117 4.97125 13.117 6.00627C13.117 7.04129 12.6885 8.01543 11.9106 8.74829C11.1327 9.48114 10.0987 9.88478 9 9.88478Z" fill="white"/>
                      </svg>
                    </span> 
                    <span onClick={()=> setBasketActive(!basketActive)} class="spn_nav_leftt">
                      <svg className='pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1818 4.90135H13.7045V4.54236C13.7045 2.26279 11.5977 0.414001 9 0.414001C6.40227 0.414001 4.29545 2.26279 4.29545 4.54236V4.90135H0.818182C0.365625 4.90135 0 5.22219 0 5.61932V17.6454C0 18.0425 0.365625 18.3634 0.818182 18.3634H17.1818C17.6344 18.3634 18 18.0425 18 17.6454V5.61932C18 5.22219 17.6344 4.90135 17.1818 4.90135ZM6.13636 4.54236C6.13636 3.15353 7.41733 2.02945 9 2.02945C10.5827 2.02945 11.8636 3.15353 11.8636 4.54236V4.90135H6.13636V4.54236ZM16.1591 16.7479H1.84091V6.51679H4.29545V8.49122C4.29545 8.58994 4.3875 8.67072 4.5 8.67072H5.93182C6.04432 8.67072 6.13636 8.58994 6.13636 8.49122V6.51679H11.8636V8.49122C11.8636 8.58994 11.9557 8.67072 12.0682 8.67072H13.5C13.6125 8.67072 13.7045 8.58994 13.7045 8.49122V6.51679H16.1591V16.7479Z" fill="white"/>
                      </svg>
                    </span> 
                    <span class="spn_nav_left">0 UAN</span> 
                    <div></div>
                
                </div>
        </div>
        <div class="div_top_1"> 
          <div className='menu_div_top'>
            <NavLink to="/rus" id="global_text">BILA CRAYE</NavLink> 
                
                    <span onClick={()=> setRegistrationActive(!registrationActive)} class="spn_nav_left" id="log" >
                      <svg className='pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M17.2938 15.0621C16.8423 14.0546 16.1871 13.1393 15.3646 12.3675C14.5446 11.5934 13.5733 10.9762 12.5042 10.55C12.4947 10.5455 12.4851 10.5432 12.4755 10.5387C13.9667 9.52399 14.9361 7.87111 14.9361 6.00627C14.9361 2.91699 12.2792 0.414001 9 0.414001C5.72077 0.414001 3.06387 2.91699 3.06387 6.00627C3.06387 7.87111 4.03328 9.52399 5.52449 10.541C5.51492 10.5455 5.50534 10.5477 5.49577 10.5522C4.42343 10.9784 3.46121 11.5895 2.63541 12.3697C1.81371 13.1422 1.15857 14.0573 0.706172 15.0644C0.261734 16.0504 0.0220377 17.1075 5.98544e-05 18.1785C-0.00057901 18.2025 0.00390188 18.2265 0.0132386 18.2489C0.0225753 18.2713 0.036579 18.2917 0.0544243 18.309C0.0722696 18.3262 0.0935956 18.3399 0.117146 18.3492C0.140696 18.3586 0.165993 18.3634 0.191548 18.3634H1.62771C1.73303 18.3634 1.8168 18.2845 1.8192 18.1875C1.86707 16.4467 2.60908 14.8163 3.92078 13.5806C5.27795 12.3021 7.08033 11.5985 9 11.5985C10.9197 11.5985 12.722 12.3021 14.0792 13.5806C15.3909 14.8163 16.1329 16.4467 16.1808 18.1875C16.1832 18.2867 16.267 18.3634 16.3723 18.3634H17.8085C17.834 18.3634 17.8593 18.3586 17.8829 18.3492C17.9064 18.3399 17.9277 18.3262 17.9456 18.309C17.9634 18.2917 17.9774 18.2713 17.9868 18.2489C17.9961 18.2265 18.0006 18.2025 17.9999 18.1785C17.976 17.1006 17.739 16.0521 17.2938 15.0621ZM9 9.88478C7.90134 9.88478 6.8673 9.48114 6.08938 8.74829C5.31146 8.01543 4.88301 7.04129 4.88301 6.00627C4.88301 4.97125 5.31146 3.99711 6.08938 3.26425C6.8673 2.5314 7.90134 2.12776 9 2.12776C10.0987 2.12776 11.1327 2.5314 11.9106 3.26425C12.6885 3.99711 13.117 4.97125 13.117 6.00627C13.117 7.04129 12.6885 8.01543 11.9106 8.74829C11.1327 9.48114 10.0987 9.88478 9 9.88478Z" fill="white"/>
                      </svg>
                    </span> 
                    <span onClick={()=> setBasketActive(!basketActive)} class="spn_nav_leftt" >
                      <svg className='pointer' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1818 4.90135H13.7045V4.54236C13.7045 2.26279 11.5977 0.414001 9 0.414001C6.40227 0.414001 4.29545 2.26279 4.29545 4.54236V4.90135H0.818182C0.365625 4.90135 0 5.22219 0 5.61932V17.6454C0 18.0425 0.365625 18.3634 0.818182 18.3634H17.1818C17.6344 18.3634 18 18.0425 18 17.6454V5.61932C18 5.22219 17.6344 4.90135 17.1818 4.90135ZM6.13636 4.54236C6.13636 3.15353 7.41733 2.02945 9 2.02945C10.5827 2.02945 11.8636 3.15353 11.8636 4.54236V4.90135H6.13636V4.54236ZM16.1591 16.7479H1.84091V6.51679H4.29545V8.49122C4.29545 8.58994 4.3875 8.67072 4.5 8.67072H5.93182C6.04432 8.67072 6.13636 8.58994 6.13636 8.49122V6.51679H11.8636V8.49122C11.8636 8.58994 11.9557 8.67072 12.0682 8.67072H13.5C13.6125 8.67072 13.7045 8.58994 13.7045 8.49122V6.51679H16.1591V16.7479Z" fill="white"/>
                      </svg>
                    </span>
                    <span onClick={()=> setmenuActive(!menuActive)}class="spn_nav_leftt"> 
                      <svg className='pointer'width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="21" height="2" rx="1" fill="white"/>
                      <rect y="6" width="21" height="2" rx="1" fill="white"/>
                      <rect y="12" width="21" height="2" rx="1" fill="white"/>
                      </svg>
                    </span>
                    <div></div>
                
                
            </div>
        </div>
        
        <CSSTransition in={registrationActive} timeout={200} classNames="alert" unmountOnExit>
        
          <div className="menu1">
          <div className="blk_element" id="menu" >
                      <div className="element">
                          <p className="regestration">E-MAIL:</p>
                          <input type="e-mail" id='input'/>
                          <p className="regestration">PASSWORD:</p>
                          <input type="password"id='input1' />
                          <div class="box">
                              <a href="/" class="regestration">Forgot password?</a>
                              <a href="/" id="under_line" class="regestration">QUICK SING UP</a>
                          </div>
                          <button class="btn"><span class="btn_class">SIGN IN</span></button>
                          
                        </div>
            </div>
            </div>
            </CSSTransition>
            <CSSTransition in={basketActive} timeout={200} classNames="alert" unmountOnExit>
              <div className='div_basket'>
              <div className='basket'>
              {props.orders.map(el=>(
                  <Order onDelete={props.onDelete} key={el.id} item={el}/>
                ))}  
                <div className='gray_line'></div>
                <div className='basket_div_text'>
                  <p className='basket_text'>СТОИМОСТЬ ТОВАРОВ:</p>
                  <p className='basket_price'>{summa} UAN</p>
                </div>
                <div className='basket_div_text' id='indent'>
                  <p className='basket_text'>СТОИМОСТЬ ДОСТАВКИ:</p>
                  <p className='basket_price'>0 UAN</p>
                </div>
                <div className='basket_div_text'>
                  <p className='basket_text'id='cvbnm'>ИТОГО:</p>
                  <p className='basket_price' id='basket_price_size'>{summa} UAN</p>
                </div>
                <div className='basket_button'>ОФОРМИТЬ ЗАКАЗ</div>
              </div>
              </div>
            </CSSTransition>
            <CSSTransition in={languageActive} timeout={200} classNames="alert" unmountOnExit>
              <div className='menu1'>
                <div className='language_div_rus'>
                  
                  
                  <NavLink to='/'  className='language_text' >ENG</NavLink>
                  <NavLink to='/ukr'  className='language_text'>UKR</NavLink>
                  <NavLink to='/rus' id='asdfg' className='language_text'>RUS</NavLink>
                </div>
              </div>
            </CSSTransition> 
            <CSSTransition in={menuActive} timeout={200} classNames="alert" unmountOnExit>
            <div className='div_basket'>
              <div className='basket'>
                
              
              <div className='div_links'>
              <NavLink to="/new.rus" className='menu_links'>Новое</NavLink>
              
              <NavLink to="/tshirt.rus" className='menu_links'>Футболки</NavLink>
              
              <NavLink to="/sweatshirt.rus" className='menu_links'>Свитшоты</NavLink>
              
              <NavLink to="/hodie.rus" className='menu_links'>Худи</NavLink>
              
              <NavLink to="/pants.rus" className='menu_links'>Штаны</NavLink>
              
              <NavLink to="/shoes.rus" className='menu_links'>Обувь</NavLink>
              
              <NavLink to='/faq.rus' className='menu_links'>FAQ</NavLink>
              </div>
              </div>
              </div>
              </CSSTransition>  
    </header>
    
  </>
  )
}