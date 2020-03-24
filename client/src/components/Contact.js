import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
//import { response } from "express";

const contactPic = require("./pics/contact.jpg");

const StyleContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
  height: auto;
  width: 100%;
  display: flex;
}
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
  }

  .contact-container,
  #contact-form {
    display: flex;
    flex-direction: column;
  }

  #contact-form {
    margin-top: 0%;
   
  }

  h1 {
    font-size: 3em;
    font-family: "Bellota";
    margin-top: ;
    margin-bottom: 1%;
    display: flex;
  }

  h1,
  h2,
  h3 {
    color: #8d6262;
  }

  h2,
  h3 {
    display: flex;
    opacity: 80%;
    margin: 5px;
    font-size: 1.5rem;
    font-weight: light;
    line-height: 150%;
    font-size: 1.5rem;
  }

  .form-group {
    color: #4d4545;
    margin-left: 15%;
    margin-right: 15%;
    text-align: justify;
    line-height: 130%;
    font-size: 1.5rem;
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
    font-weight: light;
    border-radius: 2px;
    border: none;
    width: 300%;
  }

  .contact-button {
    width: 80px;
    background-color: #white;
    color: #8d6262;
    line-height: 130%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self; center;
    margin: 3%;
    border-radius: 5px;
    cursor: pointer;

  }

  .contact-button:hover {
    background-color: #8d6262;
    color: white;
  }
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
          alert("Meddelande skickades inte. Vänligen fyll i fältten.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="container">
        <StyleContact>
        <img src={contactPic} />
          <section className="contact-container">
            <h1>Kontakta mig</h1>
            <h2>Mejl: matildaeden@gmail.com</h2>
            <h2>Telefon: 0704-809205</h2>
            <h3>Skicka ett meddelande till mig:</h3>
          </section>

          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Namn</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Din mejladress</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                aria-describedby="emailHelp"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Meddelande</label>
              <textarea
                className="form-control"
                value={this.state.message}
                rows="5"
                onChange={this.onMessageChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="contact-button"
                onSubmit={this.handleSubmit}
              >
                Sänd
              </button>
            </div>
          </form>
        </StyleContact>
      </div>
    );
  }
}

export default Contact;
