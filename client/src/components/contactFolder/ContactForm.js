import React from 'react'
import ContactInput from './ContactInput.js'
import styled from 'styled-components'

const StyleContactForm = styled.div`
  #contact-form {
    text-align: justify;
    float: right;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-bottom: 10%;
    font-family: Arial, sans-serif;
  }

  .form-group {
    color: #4d4545;
    margin-left: 10%;
    margin-right: 10%;
    text-align: justify;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    font-size: 0.9em;
  }

  .form-control {
    display: flex;
    opacity: 90%;
    margin: 5px;
    font-size: 1em;
    padding: 5%;
    font-weight: lighter;
    border-radius: 2px;
    border: none;
    width: 200%;
    font-family: Helvetica, Arial, sans-serif;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    background-color: white;
    color: #8d6262;
    line-height: 130%;
    font-size: 0.9em;
    margin: 2%;
    border-radius: 5px;
    cursor: pointer;
    border-color: #8d6262;
    padding: 5px;
  }

  .label {
    font-size: 0.7em;
  }

  button:hover {
    background-color: #8d6262;
    color: white;
  }

  button:focus {
    outline-color: #f3d4d4;
  }
`

const ContactForm = ({
  onSubmit,
  name,
  onNameChange,
  email,
  onEmailChange,
  message,
  onMessageChange,
  handleSubmit,
}) => (
  <StyleContactForm>
    <form id='contact-form' onSubmit={onSubmit} method='POST'>
      <ContactInput
        htmlFor='name'
        type='text'
        title='Namn'
        value={name}
        OnChange={onNameChange}
      />
      <ContactInput
        htmlFor='name'
        type='email'
        title='Din mejladress'
        value={email}
        OnChange={onEmailChange}
        aria-describedby='emailHelp'
      />

      <div className='form-group'>
        <label htmlFor='message'>Meddelande</label>
        <textarea
          className='form-control'
          value={message}
          rows='5'
          onChange={onMessageChange}
        ></textarea>
      </div>
      <div className='form-group'>
        <button type='submit' onSubmit={handleSubmit}>
          Sänd
        </button>
      </div>
    </form>
  </StyleContactForm>
)

export default ContactForm
