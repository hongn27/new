import  './AboutCompany.css'
import React from 'react'
import img_WomenBlueShirt from '@images/WomenBlueShirt.svg'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'

const AboutCompany = () => {
  return (
        <section className="about-company">
            <div className="container">
                <div className="img-box">
                    <img src={img_WomenBlueShirt} />
                    <div className="overlay-box">
                        <span className="name">Sammantha Brown,</span>
                        <span className="position">Founder</span>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="about-company-text">
                    <div className="section-title">
                        <SectionTitle title='About Company'description='We Are Business Consulting & Credit Repair Experts' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                        obcaecati? Ex esse error voluptates iure vel toam eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipsci
                        accuasantium libero provident voluptate amet.</p>
                    <div className="ac-buttons">
                        <Button type='dark' title='Learn More' url='/' />
                        <a className="btn-play" href=""><i className="fa-sharp fa-solid fa-play"></i></a>
                        <p className="video-text">Intro Video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany