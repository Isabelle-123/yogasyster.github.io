import React from 'react';

const ContactInput = ({htmlFor, type, title, value, OnChange, ariaDescribedby=""}) => (
  <div className="form-group">
  <label htmlFor={htmlFor}>{title}</label>
  <input
    type={type}
    className="form-control"
    value={value}
    onChange={OnChange}
    aria-describedby = {ariaDescribedby}
  />
</div>
)

export default ContactInput;