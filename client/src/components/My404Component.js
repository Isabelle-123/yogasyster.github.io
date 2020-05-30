import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//import PageNotFound from '../assets/images/PageNotFound'

const Style404 = styled.section`
  .msg404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
    cursor: pointer;
    list-style: none;
  }
`

const My404Component = () => {
  return (
    <>
      <Style404>
        {/* <img src={PageNotFound} /> */}
        <h1 className='msg404'>Oops! Sidan kunde inte hittas - 404.</h1>
        <p className='link'>
          <Link to='/'>Gå till startsida</Link>
        </p>
      </Style404>
    </>
  )
}

export default My404Component
