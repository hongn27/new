import React from 'react'
import './contactInfo.css'
import ContactInfoBox from './ContactInfoBox'
import img_location_icon from '@images/location_icon.svg'
import img_Phone from '@images/Phone.svg'
import img_Email from '@images/Email.svg'
const ContactInfo = () => {
  return (
    <section className='ContactInfo'>
      <div className='container'>
        {/* Visit Us */}
        <div className='frame'>
            <div className='img'>
              <img src={img_location_icon} />
            </div>            
            <ContactInfoBox 
            title='Visit Us' 
            description1='Sveavägen 31'
            description2=' 111 34 STOCKHOLM'/>
        </div> 
        {/* Call Us */}
        <div className='frame'>
            <div className='img'>
              <img src={img_Phone} />
            </div>
            <ContactInfoBox 
            title='Call us' 
            description1='+46 (8) 121 470 50'
            description2=' +46 (8) 121 470 51'/>
        </div> 
        {/* Email us */}
        <div className='frame'>
          <div className='img'>
            <img src={img_Email} />
          </div> 
          <ContactInfoBox 
          title='Email us' 
          description1='info@crito.com'
          description2='support@crito.com'/>
        </div>               
      </div>
    </section>
  )
}

export default ContactInfo