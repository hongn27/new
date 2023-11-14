import './ContactForm.css'
import React, { useState } from 'react'


const ContactForm = () => {
    const [name, setName]= useState('')
    const [nameError, setNameError]= useState(false)
    const [email, setEmail]= useState('')
    const [emailError, setEmailError]= useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError]= useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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
                setMessageError(validateLength(e.target.value, 3))
                break
        }
    }
    const validateLength = (value, minLength=4) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        
        const user ={name, email, message}
        const json=JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers:{
                'content-type': 'application/json'
            },
            body: json
        })

        clearForm()

        switch (result.status){
            case 200:
                clearForm()
                alert('Formuläret har skickats.')
                break
            case 400:
                setErrorMessage(`Något gick fel. Vänligen kontrollera värderna`)
                break
            case 409:
                setErrorMessage(`E-postadressen är upptagen`)
                break
        }

    }
    
    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    

  return (
    <div className='contactForm mt-3'>
        <div className='container'>
           <div className='title-form'>
                <h3>Leave us a message for any information.</h3>
                <p className='errorMessage'>{errorMessage}</p>
           </div>
            <div className='form'>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='name'>
                        <input className='form-control' placeholder='Name*' type="text" name='name' value={name} onChange={(e) => handleChange(e)} />
                        <span className={`${nameError ? 'error' : ''} `}>{ ` ${nameError ? 'Namn måste anges' : ''} `} </span>
                    </div>
                    <div className='email'>
                        <input className='form-control' placeholder='Email*' type="email" name='email' value={email} onChange={(e) => handleChange(e)} />
                        <span className={`${emailError ? 'error' : ''} `}>{ ` ${emailError ? 'Skriv in ett giltig e-post' : ''} `} </span>           
                    </div>    
                    <div className='message'> 
                        <textarea className='message-control' placeholder='Your Message*' type="text" name='message' value={message} onChange={(e) => handleChange(e)} ></textarea>
                        <span className={`${messageError ? 'error' : ''} `}>{ ` ${messageError ? 'Meddelandet är för kort' : ''} `} </span>
                    </div> 
                    <button className='submit'>Send Message<i className='fa-regular fa-arrow-up-right'></i></button>
                    
                </form>
                
            </div>
        </div>

    </div>
  )
}

export default ContactForm