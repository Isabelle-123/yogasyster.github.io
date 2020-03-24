import React from "react";
import styled from "styled-components";


const Matilda = require("./pics/7.2.jpg");

const StyleHome = styled.section`
img {
  height: auto;
  width: 100%;
  display: flex;
}

.hem-container {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3em;
  font-family: "Bellota";
  margin-top: 2%;
  margin-bottom: 1%;
  display: flex;
}

h1,
h2,
h3 {
  color: #84142d;
}

h2,
h3 {
  display: flex;
  opacity: 80%;
  margin: 5px;
  font-family: "Bellota";
  font-size: 1.5rem;
}
`;

const Home = () => {
  return (
    <React.Fragment>
      <StyleHome>
        <section className="hem-container">
          <img src={Matilda} />
          <h1>Yogasyster</h1>
          <h2>Utbildad Yogalärare</h2>
          <h3>Legitimerad Arbetsterapeut och massör </h3>
          {/* <h3>Massör</h3> */}
        </section>
      </StyleHome>
    </React.Fragment>
  );
};

export default Home;
