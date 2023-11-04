import React from 'react'
import Navsection from '@Components/Navsection/Navsection'
import Showcase from '@Components/Showcase/Showcase'
import Partner from '@Components/Partner/Partner'
import Features from '../Components/Features/Features'
import OurServices from '@Components/OurServices/OurServices'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import ProjectCaseStudies from '../Components/ProjectCaseStudies/ProjectCaseStudies'





const Home = () => {
  return (
   <>
      
      <Navsection />
      <Showcase />
      <Partner />
      <Features />
      <OurServices />
      <WhyChooseUs />
      <ProjectCaseStudies />
        
   </> 
  )
}

export default Home