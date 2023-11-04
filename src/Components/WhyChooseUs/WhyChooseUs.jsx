import './WhyChooseUs.css'
import React from 'react'
import WhyChooseUsBox from './WhyChooseUsBox'
import img_thumbUp from '@images/thumb-up.png'
import img_diamond from '@images/diamond.png'
import img_scale from '@images/scale.png'
import img_brain from '@images/brain.png'
import SectionTitle from '../Generics/SectionTitle'
import img_amyHirschi from '@images/amy-hirschi.svg'

const WhyChooseUs = () => {
  return (
    <section className="why-us">
        <div className='container'>
            <div className='box-left'>
                <div className='title'> 
                <SectionTitle title='Why Choose Us' description='Why We Are The Best Business Consulting Agency' />
                </div>
                <div className='strategics-info'>
                    <div className="box Process">
                        <img src= {img_thumbUp} /> 
                        <WhyChooseUsBox title='Process Excellence' description='Lorem, ipsum dolor sit amet consectetur' url='/' />
                    </div>
                    <div className="box Strategic">
                        <img src= {img_diamond} /> 
                        <WhyChooseUsBox title='Strategic Planning' description='Lorem, ipsum dolor sit amet consectetur' url='/' />
                    </div>
                    <div className="box Experience">
                        <img src= {img_scale} />
                        <WhyChooseUsBox title='Experience Design' description='Lorem, ipsum dolor sit amet consectetur' url='/' />
                    </div>
                    <div className="box Artificial">
                        <img src= {img_brain} /> 
                        <WhyChooseUsBox title='Artificial Intelligence' description='Lorem, ipsum dolor sit amet consectetur' url='/' />
                    </div>
                </div>
            </div>
            <div className="meeting">
                    <div className="background-frame">
                    </div> 
                    <div className="overlay-img">
                        <img src={img_amyHirschi} />
                    </div>
            </div>          
        </div>  
    </section>    
  )
}

export default WhyChooseUs