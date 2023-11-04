import React from 'react'

const ServiceBox = ({title, description,url}) => {
  return (

    <div className="box">
        <div className="box-content">
            <div className="thin-line">
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="arrow">
              <a href={url}>
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>                           
        </div>
    </div>
  )
}

export default ServiceBox