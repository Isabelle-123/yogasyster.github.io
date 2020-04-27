import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactText from "./ContactPicText";
//import { response } from "express";



const StyleContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* img {
  height: auto;
  width: 100%;
  display: flex;
  border-radius: 1000px;
} */
  /* .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
  } */

  /* .contact-container,
  #contact-form {
    display: flex;
    flex-direction: column;
  } */

  /* #contact-form {
    margin-top: 0%;
   
  } */

  /* h1 {
    font-size: 1.5em;
    font-family: "Bellota";
    margin-bottom: 1%;
    display: flex;
    align-self: center;
  } */

  /* h1,
  h2,
  h3 {
    color: #8d6262;
  } */

  /* h2,
  h3 {
    display: flex;
    opacity: 80%;
    margin: 5px;
    font-size: 1rem;
    font-weight: light;
    line-height: 150%;
    font-size: 1.5rem;
  } */

  /* .form-group {
    color: #4d4545;
    margin-left: 15%;
    margin-right: 15%;
    text-align: justify;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  
  } */

  /* .form-control {
    display: flex;
    opacity: 90%;
    margin: 5px;
    font-size: 100%;
    font-weight: light;
    border-radius: 2px;
    border: none;
    width: 300%;
  } */

  /* .contact-button {
    width: 80px;
    background-color: #white;
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
  } */
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    axios
      .post("http://localhost:3001/contact/send", {
        data: this.state
      })
      .then(response => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Meddelande skickades!");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Meddelande skickades inte. Vänligen fyll i fälten.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <React.Fragment>
        <StyleContact>
        <ContactText />
        <ContactForm onSubmit = {this.handleSubmit.bind(this)} name = {this.state.name} onNameChange = {this.onNameChange} 
            email = {this.state.email} onEmailChange = {this.onEmailChange} message = {this.state.message} 
            onMessageChange = {this.onMessageChange} handleSubmit = {this.handleSubmit}
            />
        </StyleContact>
        </React.Fragment>
    );
  }
}

export default Contact;