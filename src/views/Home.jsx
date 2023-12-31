import React from 'react'
import Navsection from '@Components/Navsection/Navsection'
import Showcase from '@Components/Showcase/Showcase'
import Partner from '@Components/Partner/Partner'
import Features from '../Components/Features/Features'
import AboutCompany from '../Components/AboutCompany/AboutCompany'
import OurServices from '@Components/OurServices/OurServices'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import ProjectCaseStudies from '../Components/ProjectCaseStudies/ProjectCaseStudies'
import MeetOurTeam from '../Components/MeetOurTeam/MeetOurTeam'
import ArticleAndNews from '../Components/ArticleAndNews/ArticleAndNews'
import GetNewUpdatesBySignup from '../Components/GetNewUpdatesBySignup/GetNewUpdatesBySignup'
import Footer from '../Components/Footer/Footer'
import Testimonial from '../Components/Testimonial/Testimonial'

const Home = () => {
  return (
   <div className='wrapper'>
      
      <Navsection />
      <Showcase />
      <Partner />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <ProjectCaseStudies />
      <MeetOurTeam />
      <Testimonial />
      <ArticleAndNews />
      <GetNewUpdatesBySignup />
      <Footer/>
        
   </div> 
  )
}

export default Home