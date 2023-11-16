import React from 'react'
import TitleBoxNav from '../Generics/TitleBoxNav'
import './NewsArticlesTitle.css'

const NewsArticlesTitle = () => {
  return (
    <section className='NewsArticlesTitle'>
    <div className='container'>
        <TitleBoxNav discription="Home News" title="News & Articles" />
    </div>
    </section>
  )
}

export default NewsArticlesTitle