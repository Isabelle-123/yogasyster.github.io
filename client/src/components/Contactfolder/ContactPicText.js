import React from 'react'
import styled from 'styled-components'
import contactPic from '../assets/images/kontakta-yogasyster-matilda.jpg'

//const contactPic = require('../pics/kontakta-yogasyster-matilda.jpg');

const StyleContactPicText = styled.div`
  img {
    height: auto;
    width: 100%;
    display: flex;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2em;
    font-weight: 500;
    display: flex;
    align-self: center;
    color: #8d6262;
  }

  h2,
  h3 {
    color: #8d6262;
    display: flex;
    margin: 5px;
    font-size: 1em;
  }

  h3 {
    margin-top: 2%;
    font-size: 0.9em;
    /* color: #84142d; */
    color: #4d4545;
    margin-bottom: 0;
    margin-top: 20px;
    font-weight: 400;
  }

  @media only screen and (max-width: 637px) {
    h1 {
      font-size: 24px;
    }
  }
`

const ContactText = () => {
  return (
    <StyleContactPicText>
      <div className='container'>
        <img
          src={contactPic}
          alt='Båt är angjord vid en brygga i Lysekil, bredvid vilar Yogasyster Matilda på klipporna'
        />
        <section className='contact-container'>
          <h1>Boka yogalektion</h1>
          <h2>Mejl: matildaeden@gmail.com</h2>
          <h2>Telefon: 0704-809205</h2>
          <h3>Eller skicka ett meddelande till mig:</h3>
        </section>
      </div>
    </StyleContactPicText>
  )
}

export default ContactText
