import React from 'react'

const Button = ({type, title, url}) => {
  
  const getbButtonClasName = () => {
    switch(type){
      case 'transparant':
        return'btn-transparent'
      case 'dark':
        return 'btn-black'
      case 'yellow':
        return 'btn-yellow '
    }

  }
  
  return (
<a className={getbButtonClasName()} 
    href={url}>
    {title}
    <i className="fa-regular fa-arrow-up-right"></i>
</a>
  )
}

export default Button