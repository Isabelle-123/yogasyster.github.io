import React, { Component } from 'react'
import { StyleClasses } from './StyleClasses'
import { Link } from 'react-router-dom'
import yogaklassPic from '../assets/images/yogaklass-massage-yogasyster.jpg'
import yogaklassPicSmall from '../assets/images/yogaklass-massage-yogasyster-matilda.jpg'
import björkPic from '../assets/images/björk.jpg'

const Classes = () => {
  return (
    <StyleClasses>
      <img
        src={yogaklassPic}
        className='pic-small-screen'
        alt='Yogasyster Matilda håller i yogaklass'
      />
      <img
        src={yogaklassPicSmall}
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
          <img src={björkPic} className='björkPic' alt='x' />
          <Link to='/contact' className='link-text'>
            Jag erbjuder yogalektioner i Göteborg och Lysekil med omnejd. Klicka
            här för att kontakta mig.
          </Link>
        </section>
        <section className='card'>
          <h1>Hatha Yoga</h1>
          <img src={björkPic} className='björkPic' alt='x' />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, sint
            voluptate saepe reiciendis officia veritatis facilis vitae veniam.
            Unde hic laborum debitis explicabo quaerat animi necessitatibus
            maiores, rerum aliquam exercitationem!
          </p>
        </section>
        <section className='card'>
          <h1>Privatlektioner</h1>
          <img src={björkPic} className='björkPic' alt='x' />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, sint
            voluptate saepe reiciendis officia veritatis facilis vitae veniam.
            Unde hic laborum debitis explicabo quaerat animi necessitatibus
            maiores, rerum aliquam exercitationem!
          </p>
        </section>
      </div>
    </StyleClasses>
  )
}

export default Classes
