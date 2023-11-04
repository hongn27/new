import React from 'react'

const ServiceBox = ({title, description}) => {
  return (

    <div className="box">
        <div className="box-content">
            <div className="thin-line">
            </div>
            <h4>{title}</h4>
            <p>{description}</p>                           
        </div>
    </div>
  )
}

export default ServiceBox