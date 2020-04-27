import React from "react";
import ContactInput from "./ContactInput.js"
import styled from "styled-components";


const StyleContactForm = styled.div`

  #contact-form {
    text-align: justify;
    float: right;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
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
  }

  .form-control {
    display: flex; 
    opacity: 90%; 
    margin: 5px;
    font-size: 100%;
    font-weight: lighter;
    border-radius: 2px;
    border: none;
    width: 200%;
  }

  .contact-button {
    width: 80px;
    background-color: white;
    color: #8d6262;
    line-height: 130%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    margin: 3%;
    border-radius: 5px;
    cursor: pointer;
  }

  .contact-button:hover {
    background-color: #8d6262;
    color: white;
  } 

  `

const ContactForm = ({ onSubmit, name, onNameChange, email, onEmailChange, message, onMessageChange, handleSubmit }) => (
  <StyleContactForm>
  <form
    id="contact-form"
    onSubmit={onSubmit}
    method="POST"
    >
      
    <ContactInput htmlFor = "name" type = "text" title = "Namn" value = {name} OnChange = {onNameChange}/>
    <ContactInput htmlFor = "name" type = "email" title = "Din mejladress" value = {email} OnChange = {onEmailChange} aria-describedby="emailHelp"/>
    
    <div className="form-group">
      <label htmlFor="message">Meddelande</label>
      <textarea
        className="form-control"
        value ={ message }
        rows="5"
        onChange={ onMessageChange }
        >
      </textarea>
    </div>
          
    <div className="form-group">
      <button
        type="submit"
        className="contact-button"
        onSubmit={ handleSubmit }
        >
        Sänd
      </button>      
    </div>
  </form>
  </StyleContactForm>
)

export default ContactForm;