import React from 'react'
import styled from 'styled-components'

const StyleFooter = styled.footer`
  background: #4d4545;
  color: white;
  opacity: 70%;
  height: 40px;
  font-size: 12px;
  margin-top: 8%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .div {
    position: absolute;
    bottom: 0px;
  }
`

const Footer = () => {
  return (
    <StyleFooter>
      <footer>
        <div>Mejl: matildaeden@gmail.com</div>
        <div>Telefon: 0704-809205</div>
      </footer>
    </StyleFooter>
  )
}

export default Footer
