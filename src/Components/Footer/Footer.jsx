import React from 'react'
import './Footer.css'
import img_CritoFooterLogo from '@images/CritoFooterLogo.svg'
import img_LogoFooter from '@images/LogoFooter.svg'
import FooterBox from './FooterBox'

const Footer = () => {
  return (
    <section className="footer">
            <div className="container">
                <div className="logo">
                    <div>
                      <img src={img_CritoFooterLogo} />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                    voluptates! Voluptates laborum nam <br></br>ratione minus necessi tatibus, iure prasentium</p>
                </div>
                {/* <!-- Company --> */}
                <FooterBox 
                  title='Company'
                  url1='/About' description1='About'
                  url2='/Features' description2='Features'
                  url3='/Works' description3='Works'
                  url4='/Career' description4='Career'
                />
                {/* <!-- Help --> */}
                <FooterBox 
                  title='Help'
                  url1='/Customer Support' description1='Customer Support'
                  url2='/Delivery Details' description2='Delivery Details'
                  url3='/Terms & Conditions' description3='Terms & Conditions'
                  url4='/Privacy Policy' description4='Privacy Policy'
                />
                {/* <!-- Resources --> */}
                <FooterBox 
                  title='Resources'
                  url1='/Free eBooks' description1='Free eBooks'
                  url2='/Development Tutorial' description2='Development Tutorial'
                  url3='/How to - Blog' description3='How to - Blog'
                  url4='/Youtube Playlist' description4='Youtube Playlist'
                />
                {/* <!-- Link --> */}
                <FooterBox 
                  title='Link'
                  url1='/Free eBooks' description1='Free eBooks'
                  url2='/Development Tutorial' description2='Development Tutorial'
                  url3='/How to - Blog' description3='How to - Blog'
                  url4='/Youtube Playlist' description4='Youtube Playlist'
                />              
            </div>
            <div className="line"></div>          
            <div className="container-socialmedia">               
                <div className="ikoner">
                    <p>
                       © 2023 Crito - Consulting Company Inc. All Rights Reserved.
                    </p>
                    <div className="social-media">
                      <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                      <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                      <a href="htpps://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                      <a href="htpps://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>          
                </div>
                <div className="bg-wawy">
                    <img src={img_LogoFooter} />
                </div>           
            </div>          
    </section>
  )
}

export default Footer