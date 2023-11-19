import React, {useState ,useEffect} from 'react'
import axios from 'axios'

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
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
            ))}
      </ul>
          
    </div>
      
    
  )


}

export default OurNewsArticles