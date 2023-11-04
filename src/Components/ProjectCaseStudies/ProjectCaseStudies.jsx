import './ProjectCaseStudies.css'
import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import ProjectCaseStudiesBox from './ProjectCaseStudiesBox'
import img_newspaper from '@images/newspaper.svg'
import img_glasses_pen from '@images/glasses_pen.svg'
import img_notebook from '@images/notebook.svg'
import img_laptop from '@images/laptop.svg'
import Button from '../Generics/Button'

const ProjectCaseStudies = () => {
  return (
            <section className="project-case">
                <div className="container">
                    <div className="project">
                        <SectionTitle title='Project & Case Studies' description='Lets Looks Our Global Projects' />
                    </div>
                    <div className="global-project">
                        <div className="project-1">
                            <img src={img_newspaper} />
                            <ProjectCaseStudiesBox title='Grow your business' url='/Grow yor business' />
                        </div>
                        <div className="project-2">
                            <img src={img_glasses_pen} />
                            <ProjectCaseStudiesBox title='Why your clients needs a responsive website' url='/Grow yor business' />
                        </div>
                        <div className="project-3">
                            <img src={img_notebook} />
                            <ProjectCaseStudiesBox title='Educate your employees to get better results' url='/Grow yor business' />
                        </div>
                        <div className="project-4">
                            <img src={img_laptop} />
                            <ProjectCaseStudiesBox title='Business Insights is a important piece of your business' url='/Grow yor business' /> 
                        </div>
                    </div>                
                    <div className="btn-browse">
                        <Button type='dark' title='All Recent Projects' url='/All Recent Projects' />
                    </div>
                </div>    
            </section>
    )
}

export default ProjectCaseStudies