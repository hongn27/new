import React from 'react'
import Navsection from '../Components/Navsection/Navsection'
import Footer from '../Components/Footer/Footer'
import TitleContact from '../Components/TitleContact/TitleContact'
import ContactInfo from '../Components/ContactInfo/ContactInfo'
import Location from '../Components/Location/Location'
import ContactForm from '../Components/ContactForm/ContactForm'




const Contact = () => {
  return (
    <div className='wrapper'>
        <Navsection />
        <TitleContact />
        <ContactInfo />
        <ContactForm />
        <Location />
        <Footer />
    </div>
  )
}

export default Contact