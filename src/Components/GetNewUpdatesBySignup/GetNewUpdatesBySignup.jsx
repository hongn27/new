import React from 'react'
import './GetNewUpdatesBySignup.css'
import img_Element from '@images/Element.svg'

const GetNewUpdatesBySignup = () => {
  return (
        <section className="sign-up">
            <div className="container">
                <div className="title">         
                    <h2>Get News Updates By Signup</h2>               
                    <div className="search-subscribe">
                        <div className="input">
                            <input type="epost-input" placeholder="username@domain.com" />
                        </div>
                        <div className="btn-subscribe">
                            <a href="#">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a>
                        </div>
                    </div>    
                </div>
                <div className="background">
                    <img src={img_Element} />
                </div>
            </div>             
        </section> 
    )
}

export default GetNewUpdatesBySignup