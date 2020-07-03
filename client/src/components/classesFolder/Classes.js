import React from 'react'
import { StyleClasses } from './StyleClasses'
import { Link } from 'react-router-dom'
import yogaklassPic from '../assets/images/yogaklass-massage-yogasyster.jpg'
import yogaklassBigScreen from '../assets/images/yogaklass-massage-yogasyster-matilda.jpg'
import hathaYogaPic from '../assets/images/yogalektioner-yogasyster-hatha-yoga.jpg'
import privateLessonsPic from '../assets/images/yogalektioner-yogasyster-privatlektioner.jpg'
import bookYoga from '../assets/images/yogalektioner-yogasyster-boka-yogalektion.jpg'

const Classes = () => {
  return (
    <StyleClasses>
      <img
        src={yogaklassPic}
        className='pic-small-screen'
        alt='Yogasyster Matilda håller i yogaklass'
      />
      <img
        src={yogaklassBigScreen}
        className='pic-big-screen'
        alt='Yogasyster Matilda håller i yogaklass'
      />

      <div className='card-container'>
        <section className='card'>
          <h1>
            <Link to='/contact' className='link-title'>
              Boka yogalektion
            </Link>
          </h1>
          <img src={bookYoga} className='björkPic' alt='x' />
          <Link to='/contact' className='link-text'>
            Jag erbjuder yoga i Lysekil och Göteborg. Frågar ni mig ska yoga
            kunna ske överallt, online, utomhus, i en studio eller i ett hem. Ta
            kontakt så berättar jag mer.
          </Link>
        </section>
        <section className='card'>
          <h1>Hatha Yoga</h1>
          <img src={hathaYogaPic} className='björkPic' alt='x' />
          <p>
            I hatha yoga handlar det om att skapa balans mellan kropp och sinne,
            görande och vila. På mina yogaklasser vill jag att du ska känna dig
            trygg och komma precis som du är. Jag guidar på ett enkelt sätt där
            andetaget och inkännandet av den egna kroppen får stor plats.
          </p>
        </section>
        <section className='card'>
          <h1>Privatlektioner</h1>
          <img src={privateLessonsPic} className='björkPic' alt='x' />
          <p>
            Tillsammans lägger vi upp en praktik utifrån dina behov och vad du
            behöver för att komma vidare på din yogaresa. Med mina erfarenheter
            som arbetsterapeut och yogalärare hoppas jag kunna guida dig och ge
            dig verktyg. Innan klassen får du ett mejl med frågor som ger mig
            bakgrund och vägledning för att komponera en praktik utefter dina
            behov.
          </p>
        </section>
      </div>
    </StyleClasses>
  )
}

export default Classes
