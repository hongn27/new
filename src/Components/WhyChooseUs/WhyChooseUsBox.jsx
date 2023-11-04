import React from 'react'

const WhyChooseUsBox = ({title, description, url}) => {
  return (
    <div className="box">
      <div className='box-text'>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url}></a>
      </div>
    </div>
  )
}

export default WhyChooseUsBox