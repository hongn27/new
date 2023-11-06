import './TitleContact.css'
import React from 'react'
import img_backgroundLinesLeft from '@images/background-lines.svg'



const TitleContact = () => {
  return (
    <div className='title'>
      <div className="background-lines">
      <img src={img_backgroundLinesLeft} />
        </div>          
      <div className='container'>
        <p>Home Contact</p>
        <h2>Let’s Connect</h2> 
         
      </div>
        
    </div>


  )
}

export default TitleContact