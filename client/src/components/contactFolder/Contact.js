import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactText from './ContactPicText'
import Alert from './Alert'

const StyleContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh
`

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg) => {
    setAlert({ msg })
    setTimeout(() => setAlert(null), 5000)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message === '' || name === '' || email === '') {
      showAlert('Vänligen fyll i alla fält')
    } else {
      axios
        .post('http://localhost:3001/contact/send', {
          data: { name, email, message },
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.status === 'success') {
            showAlert('Meddelande skickat!')
            resetForm()
          } else if (response.data.status === 'fail') {
            showAlert('Något gick fel! Meddelande skickades inte.')
          }
        })
    }
  }
  const resetForm = () => {
    setMessage('')
    setEmail('')
    setName('')
  }

  return (
    <StyleContact>
      <ContactText />
      <ContactForm
        onSubmit={handleSubmit}
        name={name}
        onNameChange={onNameChange}
        email={email}
        onEmailChange={onEmailChange}
        message={message}
        onMessageChange={onMessageChange}
        handleSubmit={handleSubmit}
        setAlert={showAlert}
      />
      <Alert alert={alert} />
    </StyleContact>
  )
}

export default Contact
