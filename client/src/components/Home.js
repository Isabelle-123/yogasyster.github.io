import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageSlides, SlideParallaxType } from 'react-page-slides';

const Matilda = require('./pics/hemsida-yogasyster-matilda.jpg');
const omYogasysterSmall = require('./pics/om-yogasyster-matilda.jpg');
const yogklassLitenPic = require('./pics/yogaklass-massage-liten.jpg');
const contactPicSmall = require('./pics/kontakta-yogasyster-matilda-liten.jpg');

const StyleHome = styled.section`
  ${'' /* img {
  height: auto;
  width: 100%;
  display: flex;
} */}

  .hem-container {
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

  .card > img {
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
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      content: (
        <StyleHome>
          <section className='hem-container'>
            <h1>Yogasyster</h1>
            <h2>Utbildad Yogalärare</h2>
            <h3>Legitimerad Arbetsterapeut och massör</h3>
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
              <img
                src={omYogasysterSmall}
                alt='Yogasyster Matilda mediterar i skogen'
                onClick={() => (window.location.href = '/MyHistory')}
              />
              <h3 onClick={() => (window.location.href = '/MyHistory')}>
                Om mig
              </h3>
            </section>
            <section className='card'>
              <img
                src={yogklassLitenPic}
                alt='Yogasyster Matilda håller i yogaklass'
                onClick={() => (window.location.href = '/Classes')}
              />
              <h3 onClick={() => (window.location.href = '/Classes')}>
                Yogaklasser
              </h3>
            </section>
            <section className='card'>
              <img
                src={contactPicSmall}
                alt='I Lysekil där en båt är angjord vid en brygga, bredvid vilar Yogasyster Matilda på klipporna'
                onClick={() => (window.location.href = '/Contact')}
              />
              <h3 onClick={() => (window.location.href = '/Contact')}>
                Kontakt
              </h3>
            </section>
          </div>
        </StyleHome>
      ),
    },
    {
      content: <div>third page content</div>,
    },
  ];
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
  );
};
export default Home;
