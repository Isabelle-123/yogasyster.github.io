import React from 'react'
import { StyleHomeFirstSlide } from './StyleHomeFirstSlide'
import { StyleHomeSecondSlide } from './StyleHomeSecondSlide'
import { StyleHomeThirdSlide } from './StyleHomeThirdSlide'
import { Link } from 'react-router-dom'
import omYogasysterSmall from '../assets/images/om-yogasyster-matilda.jpg'
import yogklassLitenPic from '../assets/images/yogaklass-massage-hem.jpg'
import contactPicSmall from '../assets/images/kontakta-yogasyster-matilda-hem.jpg'

const Home = () => {
  return (
    <>
      <StyleHomeFirstSlide>
        <div className='slide-one-container'>
          <section className='container'>
            <h1>Yogasyster</h1>
            <h2>legitimerad arbetsterapeut</h2>
            <h2>yogalärare och massör</h2>
          </section>
        </div>
      </StyleHomeFirstSlide>

      <StyleHomeSecondSlide>
        <div className='card-container'>
          <section className='card'>
            <Link to='/contact' className='link'>
              <img
                src={contactPicSmall}
                alt='I Lysekil där en båt är angjord vid en brygga, bredvid vilar Yogasyster Matilda på klipporna'
              />
              Boka yogalektion
            </Link>
          </section>
          <section className='card'>
            <Link to='/classes' className='link'>
              <img
                src={yogklassLitenPic}
                alt='Yogasyster Matilda håller i yogaklass'
              />
              Mina yogalektioner
            </Link>
          </section>
          <section className='card'>
            <Link to='/about' className='link'>
              <img
                src={omYogasysterSmall}
                alt='Yogasyster Matilda mediterar i skogen'
              />
              Om mig
            </Link>
          </section>
        </div>
      </StyleHomeSecondSlide>

      <StyleHomeThirdSlide>
        <section className='insta-container'>
          <div className='instagram-title-container'>
            <h3 className='instagram-title'>
              Följ mig på instagram @yogasyster
            </h3>
          </div>
          <article
            className='powr-social-feed'
            id='9bc6ecef_1591955690'
          ></article>
        </section>
      </StyleHomeThirdSlide>
    </>
  )
}
export default Home
