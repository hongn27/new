import React from 'react'
import Navsection from '../Components/Navsection/Navsection'
import TitleContact from '../Components/TitleContact/TitleContact'
import  GetNewUpdatesBySignup from '../Components/GetNewUpdatesBySignup/GetNewUpdatesBySignup'
import Footer from '../Components/Footer/Footer'
import OurNewsArticles from '../Components/OurNewsArticles/OurNewsArticles'

const News = () => {
  return (
    <div>
      <Navsection />
      <TitleContact />
      <OurNewsArticles />
      <GetNewUpdatesBySignup />
      <Footer />
    </div>
  )
}

export default News