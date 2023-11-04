import './OurServices.css'
import React from 'react'
import img_background_lines_right from '@images/background-lines-right.svg'
import ServiceBox from './ServiceBox'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const OurServices = () => {
  return (
    
    <section className="our-services">
      <div className="container">
        <SectionTitle title='Our Services' description='We Provide The Best Consulting Service' />
        <div className="box-frame">
          <ServiceBox title='Business Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' url='/services/businessadvice'  />
          <ServiceBox title='Startup Business' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' url='/services/startupbusiness' />
          <ServiceBox title='Financial Advice' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' url='/services/finacialadvice' />
          <ServiceBox title='Risk Management' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' url='/services/riskmanagement' />
        </div>
          <Button type='transparant' title='Browse Services' url='/Services' />
          <div className="background">
            <img src= {img_background_lines_right} />  
          </div>
      </div>
    </section>
  )
}

export default OurServices