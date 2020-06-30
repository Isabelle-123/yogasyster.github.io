import React from 'react'
import styled from 'styled-components'
import contactPic from '../assets/images/kontakta-yogasyster-matilda.jpg'

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
          <h2>Mejl: matilda.yogasyster@gmail.com</h2>
          <h2>Telefon: 0704-809205</h2>
        </section>
      </div>
    </StyleContactPicText>
  )
}

export default ContactText
