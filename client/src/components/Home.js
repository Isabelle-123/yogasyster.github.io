import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageSlides, SlideParallaxType } from 'react-page-slides'
import { Link } from 'react-router-dom'
import Matilda from './assets/images/hemsida-yogasyster-matilda.jpg'
import omYogasysterSmall from './assets/images/om-yogasyster-matilda.jpg'
import yogklassLitenPic from './assets/images/yogaklass-massage-hem.jpg'
import contactPicSmall from './assets/images/kontakta-yogasyster-matilda-hem.jpg'

// const Matilda = require('./pics/hemsida-yogasyster-matilda.jpg')
// const omYogasysterSmall = require('./pics/om-yogasyster-matilda.jpg')
// const yogklassLitenPic = require('./pics/yogaklass-massage-hem.jpg')
// const contactPicSmall = require('./pics/kontakta-yogasyster-matilda-hem.jpg')

const StyleHome = styled.section`
  ${'' /* img {
  height: auto;
  width: 100%;
  display: flex;
} */}

  .container {
    width: 600px;
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    align-items: center;
    margin: 8% 30% 0% 45%;
    color: #84142d;
  }

  h1 {
    font-size: 7em;
    font-family: 'Bellota';
    ${'' /* font-family: 'Zeyada'; */}
    display: flex;
    margin: 3%;
  }

  h2 {
    font-size: 3em;
    margin: 3%;
  }

  h3 {
    font-size: 2em;
    margin-top: 0;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30vh;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    width: 290px;
    padding: 1%;
  }

  .img {
    width: 290px;
    height: 320px;
    border-radius: 5px;
    cursor: pointer;
  }

  .card > h3 {
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
    cursor: pointer;
  }

  .links {
    display: flex;
    text-decoration: none;
    color: #8d6262;
    font-size: 0.7em;
  }
`

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const slides = [
    {
      content: (
        <StyleHome>
          <section className='container'>
            <h1>Yogasyster</h1>
            <h2>Hathayoga</h2>
            <h3>Legitimerad arbetsterapeut och massör</h3>
          </section>
        </StyleHome>
      ),
      style: {
        backgroundImage: `url(${Matilda})`,
      },
    },
    {
      content: (
        <StyleHome>
          <div className='card-container'>
            <section className='card'>
              <Link to='/about'>
                <img
                  src={omYogasysterSmall}
                  alt='Yogasyster Matilda mediterar i skogen'
                  className='img'
                />
              </Link>
              <Link to='/about' className='links'>
                <h3>Om mig</h3>
              </Link>
            </section>
            <section className='card'>
              <Link to='/classes'>
                <img
                  src={yogklassLitenPic}
                  alt='Yogasyster Matilda håller i yogaklass'
                  className='img'
                />
              </Link>
              <Link to='/classes' className='links'>
                <h3>Yogaklasser</h3>
              </Link>
            </section>
            <section className='card'>
              <Link to='/contact'>
                <img
                  src={contactPicSmall}
                  alt='I Lysekil där en båt är angjord vid en brygga, bredvid vilar Yogasyster Matilda på klipporna'
                  className='img'
                />
              </Link>
              <Link to='/contact' className='links'>
                <h3>Kontakt</h3>
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
