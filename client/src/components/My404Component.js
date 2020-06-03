import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//import PageNotFound from '../assets/images/PageNotFound'

const björk = require('./pics/björk.jpg')

const Style404 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
  }

  .msg404 {
    display: flex;
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
  }

  .link {
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
    cursor: pointer;
    list-style: none;
  }

  img {
    height: 100%;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
`

const My404Component = () => {
  return (
    <>
      <Style404>
        {/* <img src={PageNotFound} /> */}
        <div className='container'>
          <h1 className='msg404'>Hoppsan! Har du gått vilse?</h1>
          <p className='link'>Felmeddelande 404</p>
          <p className='link'>
            <Link to='/'>Gå till startsida</Link>
          </p>
          <img src={björk} alt='Björkträd i Göteborg' />
        </div>
      </Style404>
    </>
  )
}

export default My404Component
