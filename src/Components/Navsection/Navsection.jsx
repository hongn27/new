import './Navesections.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Crito from '@images/logotype.svg'
import Button from '../Generics/Button'


const Navsection = () => {
  return (
        <div className='NavSection'>
        <div className="container">
            <link to="/" />
            <img src={Crito} />
            <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-solid fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 Stockholm
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://sv-se.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://se.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/Service">Service</NavLink>
                        <NavLink to="/News">News</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                    </nav>
                        <Button type='yellow' title='Login' url='/Login' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navsection