import React from 'react';

const ContactInput = ({htmlFor, type, title, value, OnChange}) => (
  <div className="form-group">
  <label htmlFor={htmlFor}>{title}</label>
  <input
    type={type}
    className="form-control"
    value={value}
    onChange={OnChange}
  />
</div>
)

export default ContactInput;