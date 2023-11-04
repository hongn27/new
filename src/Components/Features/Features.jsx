import './features.css'
import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import FeaturesBox from './FeaturesBox'
import img_Business from '@images/business-advice.png'
import img_Startup from '@images/startup-business.png'
import img_Financial from '@images/Financial-advice.png'
import img_Risk from '@images/Risk-management.png'


const Features = () => {
  return (
    <section className="features">
            <div className="container">
                <div className="box-features border">
                    <SectionTitle title='Features'description='Our Accounting is trusted by thousand of companies' />
                    <Button type='yellow' title='Learn More' url='/Featuers' />
                </div>
                <div className="boxes">
                    <div className="box-advice">
                        <img src={img_Business}/>
                        <FeaturesBox title='Business Advice' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' url='' />                   
                    </div>
                    <div className="box-startup">
                        <img src= {img_Startup} />
                        <FeaturesBox title='Startup Business' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' url=''/>                   
                    </div>
                    <div className="box-financial">
                        <img src= {img_Financial} />
                        <FeaturesBox title='Financial Advice' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' url=''/>                                       
                    </div>
                    <div className="box-risk">
                        <img src={img_Risk} />
                        <FeaturesBox title='Risk Management' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' url=''/>                   
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Features