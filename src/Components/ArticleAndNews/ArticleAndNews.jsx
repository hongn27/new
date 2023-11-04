import React from 'react'
import './ArticleAndNews.css'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../Generics/Button'
import img_womanmeetingroom from '@images/womanMeetingroom.svg'
import img_chatGPT from '@images/chatGPT.svg'
import img_PhoneAndbooks from '@images/PhoneAndBooks.svg'

const ArticleAndNews = () => {
  return (
        <section className="article-news">
            <div className="container">
                <div className="content">
                    <div className="box-title">
                        <SectionTitle title='Meet Our Team' description='Experience Team Members' />
                        <div className="Button">
                            <Button type='yellow' title='Browse Team' url='' />
                        </div>   
                    </div>
                    <div className="images">
                        <div className="box-img">
                            <div className="box-date">
                               <div className="date">
                                <h4>25</h4>
                                <p>Mar</p>
                                </div>  
                            </div>
                            <div>
                                <img src={img_womanmeetingroom} />
                            </div>
                            <div className="box-text">
                                <div >Business</div>
                                <div>
                                    <h4>
                                        How To Use Digitalization 
                                        In The classNameroom  
                                    </h4>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box-img">
                            <div className="box-date">
                                <div className="date">
                                    <h4>17</h4>
                                    <p>Mar</p>
                                    </div>  
                            </div>
                            <div>
                                <img src={img_chatGPT} />
                            </div>
                            <div className="box-text">
                                <div >Business</div>
                                <div>
                                    <h4>
                                        How To Implement Chat GPT
                                        In Your Projects 
                                    </h4>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box-img">
                            <div className="box-date">
                                <div className="date">
                                    <h4>13</h4>
                                    <p>Mar</p>
                                    </div>  
                            </div>
                            <div>
                                <img src={img_PhoneAndbooks} />                               
                            </div>
                            <div className="box-text">
                                <div >Business</div>
                                <div>
                                    <h4>
                                        The Guide To Support 
                                        Modern CSS Design  
                                    </h4>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dots">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>
                        <i className="fa-duotone fa-circle"></i>       
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default ArticleAndNews