import SectionTitle from '../Generics/SectionTitle'
import './MeetOurTeam.css'
import React from 'react'
import img_KristinePalmer from '@images/KristinePalmer.svg'
import img_MarcAubri from '@images/MarcAubri.svg'
import img_KimberlyHansen from '@images/KimberlyHansen.svg'
import img_JustinWilloman from '@images/JustinWilloman.svg'
import Button from '../Generics/Button'

const MeetOurTeam = () => {
  return (
        <section className="meet-our-team">
            <div className="container">
                <div className="box-1">
                    <div className="box-title">
                        <SectionTitle title='Meet Our Team' description='Experience Team Members' />
                        <div className="Button">
                            <Button type='yellow' title='Browse Team' url='/MeetOurTeam' />
                        </div>   
                    </div>
                    <div className="team-members">
                        {/* <!-- Kristine Palmer --> */}
                        <div className="img-teams">
                            <img src={img_KristinePalmer} />
                            <h4>Kristine Palmer</h4>
                            <p>Chef Operator Officer</p>      
                        </div>
                        {/* <!-- Marc Aubri --> */}
                        <div className="img-teams">
                            <img src={img_MarcAubri} />
                            <h4>Marc Aubri</h4>
                            <p>Senior Consultant</p>
                        </div>
                        {/* <!-- Kimberly Hansen --> */}
                        <div className="img-teams">
                            <img src={img_KimberlyHansen} />
                            <h4>Kimberly Hansen</h4>
                            <p>Senior Consultant</p>
                        </div>
                        {/* <!-- Justin Willoman --> */}
                        <div className="img-teams">
                            <img src={img_JustinWilloman} />
                            <h4>Justin Willoman</h4>
                            <p>Senior Tech Consultant</p>
                        </div>  
                    </div>
                    <div className="dots">
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>    
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>   
                    </div>
                </div> 
                
            </div>    
        </section>
    )
}

export default MeetOurTeam