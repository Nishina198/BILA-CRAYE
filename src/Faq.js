import React from 'react'

import HeaderFAQRus from './components/HeaderFAQRus'
import Footer from './components/Footer'
import './faq.css'


const Faq = () => {
  
  return (
        <>
        <HeaderFAQRus/>
        <main className='main_faq'>
          <div className='div_title'>
            <div className='div_text1'>
            <span className='elements_p' >
              <span className='span_title_btn'>
                    <p  class="title_btn">ДОСТАВКА И ОПЛАТА</p>
                    </span>
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
                  
                  
          
            
            <div id='text1' className='p_text'> <p> <span className='title_text'>Отправка?</span><br/>

            <p>Оформленый заказ будет собран и отправлен в течении 1-2 дней. <br/>При условии оформления заказа до 15:00, товар <br/>будет отправлен в той же день<br/></p>

              <span className='title_text'>Кто платит за доставку?</span><br/>
              
              <p>За доставку платит получатель, в случае брака и обмена по нашей вине <br/>за доставку платим мы. (Фото брака предоставлять обязательно)<br/></p>

              

              <span className='title_text'>Транспортные расходы?</span><br/>

              <p>Транспортные расходы за не забранные посылки компенсирует дропшиппер.<br/></p>

              

              <span className='title_text'>Обмен?</span><br/>

              <p>Для обмена товара необходимо<br/>
              в течении 3-х дней с момента получения товара, связаться<br/> с нашим менеджером <br/>
              После получении посылки и осмотра товара, обмен будет<br/> отправлен в течении 1-3 дней</p></p></div>
              
            </span>
            </div>
            <div className='div_text2'>
            <span className='element_p'>
            <span className='span_title_btn'>
            <p className='title_btn' >ОСНОВНЫЕ ВОПРОСЫ</p></span>
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
                  
                  
             <div id='right_div' className='p_text1'><p><span className='title_text'>Могу ли я доверять Вам?</span><br/>

             <p>Мы полностью берем ответственность за все возможные проишествия.<br/> Это команда, которой вы спокойно можете доверить свой собственный гардероб.<br/></p>

              <span className='title_text'>Почему так дорого?</span><br/>
              
              <p>Мы используем одни из самых дорогих тканей, материалов в наших изделиях,<br/> когда весь рынок нацелен на дешевое производство.<br/></p>

              <span className='title_text'>Будет ли еще новый товар?</span><br/>

              <p>Все зависит от спроса, производство качественных вещей очень дорогое,<br/> потому мы тысячу раз подумаем надо ли оно. Пока в планах новые рюкзаки.<br/></p>

              <span className='title_text'>Что в вашем товаре уникального?</span><br/>

              <p>Главное в нашей одежде - не только красота, но и комфорт. <br/> Мы уделяем внимание всем деталям - наши этикетки тому подтверждение. <br/>Также товары B.O.M.J. имеют живую подпись дизайнера,<br/> что говорит о нашем неравнодушии к покупателю.</p></p></div>

              
            </span>
            </div>
          </div>
         
          
          
        </main>
        <Footer/>
        </>
  )
}
        
export default Faq
