import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyNavbar = styled.nav`
  background: #4d4545;
  height: auto;
  opacity: 70%;
  top: 0;
  z-index: 100;
  position: fixed;
  width: 100%;

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px 0px 5px 0px;
  }

  /* .logo {
    font-size: 2 vh;
  }  */

  .links {
    display: flex;

    text-decoration: none;
    color: white;
    opacity: none;
    font-size: 0.7rem;
  }
`;

const Navbar = () => {
  return (
    <MyNavbar>
      {/* <div className="logo">Yogasyster </div> */}
      <ul className='nav-links'>
        <li>
          <Link to='/' className='links'>
            Hem
          </Link>
        </li>
        <li>
          <Link to='/MyHistory' className='links'>
            Om mig
          </Link>
        </li>
        <li>
          <Link to='/Classes' className='links'>
            Yogaklasser
          </Link>
        </li>
        <li>
          <Link to='/Contact' className='links'>
            Kontakt
          </Link>
        </li>
      </ul>
    </MyNavbar>
  );
};

export default Navbar;
