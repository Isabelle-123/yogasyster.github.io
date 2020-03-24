import React from "react";
import ContactInput from "./ContactInput.js"

const ContactForm = ( {onSubmit, name, onNameChange, email, onEmailChange, message, onMessageChange, handleSubmit }) => (
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
)

export default ContactForm;