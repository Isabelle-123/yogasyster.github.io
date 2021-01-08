import React from 'react'
import styled from 'styled-components'

const StyleFooter = styled.footer`
  background: #4d4545;
  color: white;
  opacity: 70%;
  height: 40px;
  font-size: 12px;
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Footer = () => {
  return (
    <StyleFooter>
      <footer>
        <div>Mejl: matilda.yogasyster@gmail.com</div>
        <div>Telefon: 0704-809205</div>
      </footer>
    </StyleFooter>
  )
}

export default Footer
