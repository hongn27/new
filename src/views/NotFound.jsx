import React from 'react'
import img_page_not_found from '@images/page-not-found.png'
import Footer from '../Components/Footer/Footer'


const NotFound = () => {
  return (
    <div>
    <h1>404 Page Not Found!</h1>
    <img src={img_page_not_found} />
    <button className='yellow' href= 'home.html'>Go to Home</button>
    
    <Footer />
   
    </div>
  )
}

export default NotFound