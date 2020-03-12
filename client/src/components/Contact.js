import React, { Component } from "react";
import axios from "axios";
//import { response } from "express";

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
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <React.Fragment>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              aria-describedby="emailHelp"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              value={this.state.message}
              rows="5"
              onChange={this.onMessageChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;
