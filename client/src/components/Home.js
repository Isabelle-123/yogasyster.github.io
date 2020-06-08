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

  display: flex;

  flex-direction: column;
  align-items: center;

  .container {
    width: 40%;
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    align-items: center;
    margin: 8% 20% 0% 55%;
    color: #84142d;
  }

  h1 {
    font-size: 8vw;
    font-family: 'Bellota';
    ${'' /* font-family: 'Zeyada'; */}
    margin: 10% 3% 3% 3%;
  }

  h2 {
    font-size: 3vw;
    margin: 3%;
  }

  h3 {
    font-size: 2vw;
    margin-top: 0;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 80vh;
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

  .link {
    color: #8d6262;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    text-decoration: none;
  }

  .link > img {
    width: 290px;
    height: 320px;
    border-radius: 5px;
    flex-shrink: 10;
  }

  

${'' /* 970 */}
  @media only screen and (max-width: 970px) {
    .card-container {
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
    }
    
    .card {
      flex-direction: row;
     
    }

    .link {
      flex-direction: row;
      width: 100%;

    }
    .link > img { {
      height: 140px;
      width: 110px;
      margin-right: 5%;
    }
  }

  @media only screen and (max-width: 425px) {
    .container {
      justify-content: center;
      margin: 10% 0% 0% 0%;
      width: 90%;
    }

    h1 {
      font-size: 3em;
      font-family: 'Bellota';
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1em;
      font-weight: 400;
    }
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
