import './Showcase.css'
import React from 'react'
import showcase from '@images/showcase-image.svg'
import Button from '../Generics/Button'



const Showcase = () => {
  return (
    <section className="showcase">

      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <Button type='yellow' title='Get Consulting' url='/service'/>
          <Button type='transparant' title='Learn More' url='/service'/>
        </div>
          <img src={showcase} />
      </div>
    </section>     
      

  )
}

export default Showcase