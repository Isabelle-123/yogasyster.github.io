import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyNavbar = styled.nav`
  background: #393232;
  color: #ffebd9;
  height: auto;

  .nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 0% 10% 0% 10%;
  }

  .logo {
    font-size: 2 vh;
  }

  .links {
    display: flex;
    text-decoration: none;
    color: #fcf8e8;
    margin: 10%;
    font-size: 0.8rem;
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

/* 
#393232
#4d4545
brunrosa 8d6262
rouge ed8d8d
puder f3d4d4
beige ffebd9 

f3d4d4*/
