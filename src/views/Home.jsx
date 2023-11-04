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





const Home = () => {
  return (
   <>
      
      <Navsection />
      <Showcase />
      <Partner />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <ProjectCaseStudies />
      <MeetOurTeam />
      <ArticleAndNews />
        
   </> 
  )
}

export default Home