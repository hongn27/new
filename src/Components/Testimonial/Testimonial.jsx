import React from 'react'
import  './Testimonial.css'
import SectionTitle from '../Generics/SectionTitle'
import img_CassandraWarren from '@images/CassandraWarren.svg'
import img_AmandaTulling from '@images/AmandaTulling.svg'
import img_JackMcDogglas from '@images/JackMcDogglas.svg'
import Button from '../Generics/Button'

const Testimonial = () => {
  return (
        <div className='testimonial'>
            <div className="container">
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
    )
}

export default Testimonial