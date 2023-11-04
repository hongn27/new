import React from 'react'

const FooterBox = ({title, description1, description2, description3, description4,
     url1, url2, url3, url4}) => {
  return (
    <div className="box">
    <div className="company">
        <h4>{title}</h4>
            <ul>
                <li><a href={url1}>{description1}</a></li>
                <li><a href={url2}>{description2}</a></li>
                <li><a href={url3}>{description3}</a></li>
                <li><a href={url4}>{description4}</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterBox