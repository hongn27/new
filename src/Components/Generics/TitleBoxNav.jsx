import React from 'react'
import img_backgroundLinesLeft from '@images/background-lines.svg'


function TitleBoxNav ({discription, title} ) {
  return (
    <div className='titlecontact'>
      <div className="background-lines">
      <img src={img_backgroundLinesLeft} />
        </div>          
      <div className='container'>
        <p>Home Contact</p>
        <h2>News & Articles</h2> 
         
      </div>
        
    </div>

  )
}

export default TitleBoxNav