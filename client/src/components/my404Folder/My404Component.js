import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import björk from '../assets/images/björk.jpg'

//import PageNotFound from '../assets/images/PageNotFound'

// const björk = require('./pics/björk.jpg')

const Style404 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  .text-container {
    background: rgba(77, 69, 69, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 30px;
  }

  .text-container > h1 {
    margin: 0px;
  }

  .link {
    cursor: pointer;
    color: white;
    font-size: 2em;
    margin-top: 5px;
  }

  @media only screen and (max-width: 767px) {
    .text-container {
      ${'' /* margin-top: 10px; */}
      font-size: 0.4em;
      padding: 5px;
    }
    .text-container > h1 {
      font-weight: 300;
    }
    .text-container > h2 {
      font-weight: 300;
    }
    .text-container > p {
      font-size: 1.5em;
    }
  }
`

const My404Component = () => {
  return (
    <>
      <Style404>
        {/* <img src={PageNotFound} /> */}
        {/* <div className='container'> */}
        {/* <img src={björk} alt='Björkträd i Göteborg' /> */}
        <section className='text-container'>
          <h1>Hoppsan! Den sida du sökte finns inte.</h1>
          <h2>404</h2>
          <Link className='link' to='/'>
            Ta mig till startsidan
          </Link>
        </section>
        {/* </div> */}
      </Style404>
    </>
  )
}

export default My404Component
