import Button from '../Generics/Button'
import SectionTitle from '../Generics/SectionTitle'
import './MeetOurTeam.css'
import React from 'react'
import img_KristinePalmer from '@images/KristinePalmer.svg'
import img_MarcAubri from '@images/MarcAubri.svg'
import img_KimberlyHansen from '@images/KimberlyHansen.svg'
import img_JustinWilloman from '@images/JustinWilloman.svg'
import img_CassandraWarren from '@images/CassandraWarren.svg'
import img_AmandaTulling from '@images/AmandaTulling.svg'
import img_JackMcDogglas from '@images/JackMcDogglas.svg'
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
                <div className="testimonial">
                    <div className="title">
                        <SectionTitle title='Testimonial' description='What Our Client Says' />
                    </div>
                    <div className="clients">
                        {/* <!-- Cassandra Warren --> */}
                        <div className="box-frame">
                            <div className="box-content">
                                <div className="stars">
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>   
                                </div>
                                <div className="text-1">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                                </div>
                                <div>
                                    <div className="box-profile">
                                        <div className="img">
                                            <img src={img_CassandraWarren} />
                                        </div>    
                                        <div className="text-2">
                                            <h4>Cassandra Warren</h4>
                                            <p>Business Manager, Dorfus</p>
                                        </div>
                                    </div>                                                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- Amanda Tulling --> */}
                        <div className="box-frame">
                            <div className="box-content">
                                <div className="stars">
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                    <i className="fa-sharp fa-solid fa-star"></i>   
                                </div>
                                <div className="text-1">
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                                </div>
                                <div>
                                    <div className="box-profile">
                                        <div className="img">
                                            <img src={img_AmandaTulling} />
                                        </div>
                                        <div className="text-2">
                                            <h4>Amanda Tulling</h4>
                                            <p>Senior Developer, Square</p>
                                        </div>
                                    </div>          
                                </div>
                            </div>
                        </div>
                        {/* <!-- Jack McDogglas --> */}
                        <div className="box-frame">
                            <div className="box-content">
                            <div className="stars">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>   
                            </div>
                            <div className="text-1">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                            </div>
                            <div>
                                <div className="box-profile">
                                    <div className="img">
                                        <img src={img_JackMcDogglas} />
                                    </div>
                                    <div className="text-2">
                                        <h4>Jack McDogglas</h4>
                                        <p>Key Account Manager, Gobona</p>
                                    </div>
                                </div>                      
                            </div>
                            </div>
                        </div>                     
                    </div>          
                    <div className="btn-reviews">
                        <Button type='dark' title='All Reviews' url='' />
                    </div>    
                </div>
            </div>    
        </section>
    )
}

export default MeetOurTeam