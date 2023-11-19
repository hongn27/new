import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './OurNewsArticles.css'
import { Link } from 'react-router-dom'


function OurNewsArticles() {
  const [posts, setposts] = useState([])

  useEffect(() => {
    axios
      .get('https://win23-assignment.azurewebsites.net/api/articles')
      .then(res => {
        console.log(res)
        setposts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [] )

  return (
    <div>
      <div className='container'>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}{post.content}{post.author}{post.published}{post.category}{post.imageUrl} </li>
            ))}
      </ul>

      <div className="pagesContent border">
        
                <Link to="/"><i className="fa-solid fa-angle-left"></i></Link>
                <Link className="active" to="/">1</Link>
                <Link to="/service/page2">2</Link>
                <Link to="/News/page3">3</Link>
                <Link to="/News/page">...</Link>
                <Link to="/News/page9">9</Link>
                <Link to="/News/page"><i className="fa-solid fa-angle-right"></i></Link>
            </div>
        </div>   
    </div>
    
  )


}

export default OurNewsArticles