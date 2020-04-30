import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactText from './ContactPicText';
//import { response } from "express";

const StyleContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    axios
      .post('http://localhost:3001/contact/send', {
        data: this.state,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'success') {
          alert('Meddelande skickades!');
          this.resetForm();
        } else if (response.data.status === 'fail') {
          alert('Meddelande skickades inte. Vänligen fyll i fälten.');
        }
      });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <React.Fragment>
        <StyleContact>
          <ContactText />
          <ContactForm
            onSubmit={this.handleSubmit.bind(this)}
            name={this.state.name}
            onNameChange={this.onNameChange}
            email={this.state.email}
            onEmailChange={this.onEmailChange}
            message={this.state.message}
            onMessageChange={this.onMessageChange}
            handleSubmit={this.handleSubmit}
          />
        </StyleContact>
      </React.Fragment>
    );
  }
}

export default Contact;
