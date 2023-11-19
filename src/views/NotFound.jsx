import React from 'react'
import img_page_not_found from '@images/page-not-found.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


const NotFound = () => {
  return (
    <div>
    <h1>404 Page Not Found!</h1>
    <img src={img_page_not_found} />
    <Link to='/'><button >Go to Home</button>
    </Link> 
    
    <Footer />
   
    </div>
  )
}

export default NotFound