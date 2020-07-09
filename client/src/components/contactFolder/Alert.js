import React from 'react'
import styled from 'styled-components'

const StyleAlert = styled.div`
  .alert-container {
    background: rgba(77, 69, 69, 0.8);
    color: white;
    font-size: 2vh;
    font-weight: 500;
    padding: 2%;
    width: 300px;
    text-align: center;
  }
`

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <StyleAlert>
        <div className='alert-container'>{alert.msg}</div>
      </StyleAlert>
    )
  )
}

export default Alert
