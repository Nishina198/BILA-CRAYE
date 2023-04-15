import React from 'react'


import '../faq.css'
import FooterEng from './FooterEng'
import HeaderFAQEng from './HeaderFAQEng'


const FAQEng = () => {
  
  return (
        <>
        <HeaderFAQEng/>
        <main className='main_faq'>
          <div className='div_title'>
            <div className='div_text1'>
            <span className='elements_p' >
            <p  class="title_btn">SHIPPING AND PAYMENT</p>
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
                  
                  
          
            
            <div id='text1' className='p_text'> <p> <span className='title_text'>Shipping?</span><br/>

            <p>The completed order will be collected and shipped within 1-2 days. <br/>Subject to ordering by 15:00 , the goods <br/>will be sent on the day of order<br/></p>

              <span className='title_text'>Who pays for shipping?</span><br/>
              
              <p>Delivery is paid by the recipient, in the case of marriage and exchange through our fault <br/>We pay for the delivery. (It is obligatory to provide a photo of the marriage)<br/></p>

              

              <span className='title_text'>Autowarfare?</span><br/>

              <p>Auto-return is on the 5th day of free storage.<br/></p>

              

              <span className='title_text'>Exchange?</span><br/>

              <p>To exchange a product you need to<br/>
              within 3 days of receipt of goods, contact<br/> our manager <br/>
              After receiving the package and examining the goods, an exchange will<br/> be sent within 1-3 days</p></p></div>
              
            </span>
            </div>
            <div className='div_text2'>
            <span className='element_p'>
            <p className='title_btn' >BASIC QUESTIONS</p>
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
                  
                  
             <div id='right_div' className='p_text1'><p><span className='title_text'>Can I trust you?</span><br/>

             <p>We take full responsibility for all possible accidents.<br/>This is the team to which you can safely trust your own closet.<br/></p>

              <span className='title_text'>Why so expensive?</span><br/>
              
              <p>We use some of the most expensive fabrics, materials in our products, <br/>when the whole market is focused on cheap production.<br/></p>

              <span className='title_text'>Will there be a new product?</span><br/>

              <p>It all depends on demand, the production of quality things is very expensive, <br/> so we will think a thousand times whether it is necessary. So far we <br/>are planning new backpacks.<br/></p>

              <span className='title_text'>What is unique about your product from others?</span><br/>

              <p>The main thing in our clothing is not only beauty, but also comfort. <br/> We pay attention to all the details - our labels confirm it. <br/> Also, the goods B.O.M.J. have a live signature of the designer, which shows our<br/>indifference to the customer.</p></p></div>

              
            </span>
            </div>
          </div>
         
          
          
        </main>
        <FooterEng/>
        </>
  )
}
        
export default FAQEng