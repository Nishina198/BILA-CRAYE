import React from 'react'


import '../faq.css'
import FooterEng from './FooterUkr'
import HeaderFAQUkr from './HeaderFAQUkr'



const FAQUkr = () => {
  
  return (
        <>
        <HeaderFAQUkr/>
        <main className='main_faq'>
          <div className='div_title'>
            <div className='div_text1'>
            <span className='elements_p' >
            <p  class="title_btn">ДОСТАВКА ТА ОПЛАТА</p>
                    <svg class="right_span1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_280)">
                    <path d="M11 7L6 12L1 7L1.8875 6.1125L6 10.225L10.1125 6.1125L11 7Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_280">
                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  
                  
          
            
            <div id='text1' className='p_text'> <p> <span className='title_text'>Відправка?</span><br/>

            <p>Оформлене замовлення буде зібране та відправлене протягом 1-2 днів. <br/>При умові оформлення замовлення до 15:00, товар <br/>відправлять у той же день<br/></p>

              <span className='title_text'>Хто платить за доставку?</span><br/>
              
              <p>За доставку платить одержувач, у разі браку та обміну з нашої вини,<br/> за доставку платимо ми. (Фото браку надавати обов'язково)<br/></p>

              

              <span className='title_text'>Автоповернення?</span><br/>

              <p>Автоповернення відбувається на 5 день безкоштовного зберігання товару<br/></p>

              

              <span className='title_text'>Обмін?</span><br/>

              <p>Для обміну товару потрібно <br/>
              протягом 3 днів зв'язатися з нашим менеджером <br/>
              Після отримання посилки та осмотру товару, обмін відбудеться<br/> протягом 1-3 днів</p></p></div>
              
            </span>
            </div>
            <div className='div_text2'>
            <span className='element_p'>
            <p className='title_btn' >ОСНОВНІ ЗАПИТАННЯ</p>
             <svg  class="right_span1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_280)">
                    <path d="M11 7L6 12L1 7L1.8875 6.1125L6 10.225L10.1125 6.1125L11 7Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_280">
                    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  
                  
             <div id='right_div' className='p_text1'><p><span className='title_text'>Чи можу я довіряти вам?</span><br/>

             <p>Ми беремо на себе повну відповідальністью.<br/>Це команда, якій ви можете сміливо довірити власний гардероб.<br/></p>

              <span className='title_text'>Чому так дорого?</span><br/>
              
              <p>Ми використовуємо доволі дорогі та якісні товари,<br/>на відміну від багатьох магазинів.<br/></p>

              <span className='title_text'>Чи будуть нові речі?</span><br/>

              <p>Все залежить від попиту товарів. <br/> Зараз в планах рюкзаки та шорти.<br/></p>

              <span className='title_text'>Що у вашому товарі унікального?</span><br/>

              <p>Головне в нашому одязі - не тільки краса, а й комфорт.<br/> Ми приділяємо увагу всім деталям - наші етикетки це підтверджують.<br/>  Також товари B.O.M.J. мають живий підпис дизайнера, <br/>що свідчить про нашу небайдужість до клієнта.</p></p></div>

              
            </span>
            </div>
          </div>
         
          
          
        </main>
        <FooterEng/>
        </>
  )
}
        
export default FAQUkr