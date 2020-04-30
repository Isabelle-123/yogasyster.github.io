import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyNavbar = styled.nav`
  background: #4d4545;
  height: auto;
  opacity: 60%;
  top: 0;
  z-index: 100;
  position: fixed;
  width: 100%;

/* 
#393232
#4d4545
vinröd 84142d
brunrosa 8d6262
rouge ed8d8d
puder f3d4d4
beige ffebd9 

  // "Zeyada",
  //   "Bellota",
*/

  .nav-links {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 0% 10% 0% 10%;

  }

 /* .logo {
    font-size: 2 vh;
  }  */

  .links {
    display: flex;
    text-decoration: none;
    color: white;
    opacity: none;
    margin: 10%;
    font-size: 0.7rem;
  }
`;

const Navbar = () => {
  return (
    <MyNavbar>
      {/* <div className="logo">Yogasyster </div> */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="links">
            Hem
          </Link>
        </li>
        <li>
          <Link to="/MyHistory" className="links">
            Om mig
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="links">
            Kontakt
          </Link>
        </li>
      </ul>
    </MyNavbar>
  );
};

export default Navbar;

