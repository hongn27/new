import React from 'react'

const ContactInfoBox = ({title, description1, description2}) => {
  return (
    <div className='box1'>                                       
        <div className='box-text' >
            <h4>{title}</h4>
            <div className='content'>
             {description1}
             <br></br>
             {description2}
            </div>
        </div>                
    </div> 
  )
}

export default ContactInfoBox