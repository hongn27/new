import React from 'react'

const ProjectCaseStudiesBox = ({title, url}) => {
  return (
    <div className="project">
      <div className="child-project">
        <div className="line"></div>
        <h4>{title}</h4>
        <a className="btn-read-more" href={url}>
          Read More
          <i className="fa-regular fa-arrow-up-right"></i>
        </a>
        </div>
    </div>  
  )
}

export default ProjectCaseStudiesBox