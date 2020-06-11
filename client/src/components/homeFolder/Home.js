import React, { useEffect } from 'react'
import { StyleHome } from './StyleHome'
import { PageSlides, SlideParallaxType } from 'react-page-slides'
import { Link } from 'react-router-dom'
import omYogasysterSmall from '../assets/images/om-yogasyster-matilda.jpg'
import yogklassLitenPic from '../assets/images/yogaklass-massage-hem.jpg'
import contactPicSmall from '../assets/images/kontakta-yogasyster-matilda-hem.jpg'

// const Matilda = require('./pics/hemsida-yogasyster-matilda.jpg')
// const omYogasysterSmall = require('./pics/om-yogasyster-matilda.jpg')
// const yogklassLitenPic = require('./pics/yogaklass-massage-hem.jpg')
// const contactPicSmall = require('./pics/kontakta-yogasyster-matilda-hem.jpg')

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const slides = [
    {
      content: (
        <StyleHome>
          <div className='slide-one-container'>
            <section className='container'>
              <h1>Yogasyster</h1>
              <h2>Hathayoga</h2>
              <h3>Legitimerad arbetsterapeut och massör</h3>
            </section>
          </div>
        </StyleHome>
      ),
    },
    {
      content: (
        <StyleHome>
          <div className='card-container'>
            <section className='card'>
              <Link to='/about' className='link'>
                <img
                  src={omYogasysterSmall}
                  alt='Yogasyster Matilda mediterar i skogen'
                />
                Om mig
              </Link>
            </section>
            <section className='card'>
              <Link to='/classes' className='link'>
                <img
                  src={yogklassLitenPic}
                  alt='Yogasyster Matilda håller i yogaklass'
                />
                Yogaklasser
              </Link>
            </section>
            <section className='card'>
              <Link to='/contact' className='link'>
                <img
                  src={contactPicSmall}
                  alt='I Lysekil där en båt är angjord vid en brygga, bredvid vilar Yogasyster Matilda på klipporna'
                />
                Kontakt
              </Link>
            </section>
          </div>
        </StyleHome>
      ),
    },
    {
      content: <div>third page content</div>,
    },
  ]
  return (
    <PageSlides
      enableAutoScroll={true}
      transitionSpeed={1000}
      slides={slides}
      parallax={{
        offset: 0.6,
        type: SlideParallaxType.reveal,
      }}
    />
  )
}
export default Home
