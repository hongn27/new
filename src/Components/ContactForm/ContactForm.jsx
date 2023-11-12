import './ContactForm.css'
import React, { useState } from 'react'


const ContactForm = () => {
    const [name, setName]= useState('')
    const [nameError, setNameError]= useState(false)
    const [email, setEmail]= useState('')
    const [emailError, setEmailError]= useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError]= useState(false)
    const [errorMessage, seterrorMessage] = useState('')

    const handleChange = (e) => {
        console.log(e.target.type)

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 3))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 5))
                break
        }
    }
    const validateLength = (value, minLength=6) => {
        if (value.length < minLength)
            return true
        return false
    }

  return (
    <div className='contactForm mt-3'>
        <div className='container'>
           <div className='title-form'>
                <h3>Leave us a message for any information.</h3>
                <p className='errorMessage'>{errorMessage}</p>
           </div>
            <div className='form'>
                <form noValidate>
                    <div className='name'>
                        <input className='form-control' placeholder='Name*' type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
                        <span className={`${nameError ? 'error' : ''} `}>{ ` ${nameError ? 'Namn måste anges' : ''} `} </span>
                    </div>
                    <div className='email'>
                        <input className='form-control' placeholder='Email*' type="email" name='email' value={email} onChange={(e) => handleChange(e)} />
                        <span className={`${emailError ? 'error' : ''} `}>{ ` ${emailError ? 'Skriv in ett giltig e-post' : ''} `} </span>           
                    </div>    
                    <div className='message'> 
                        <input className='message-control' placeholder='Your Message*' type="text" name='message' value={message} onChange={(e) => handleChange(e)} />
                        <span className={`${messageError ? 'error' : ''} `}>{ ` ${messageError ? 'Meddelandet är för kort' : ''} `} </span>
                    </div> 
                    <button type='submit'>Send Message</button> 
                    
                </form>
                
            </div>
        </div>

    </div>
  )
}

export default ContactForm