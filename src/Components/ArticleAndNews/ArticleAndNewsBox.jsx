import React from 'react'

const ArticleAndNewsBox = ({text, title, description}) => {
  return (
    <div className="box-text">
      <div >{text}</div>
        <div>
          <h4>{title}</h4>
            <p>{description}</p>
      </div>
    </div>
  )
}

export default ArticleAndNewsBox