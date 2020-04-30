import React, {useEffect} from "react";
import styled from "styled-components";
import {PageSlides, SlideParallaxType} from "react-page-slides";


const Matilda = require("./pics/hemsida-yogasyster-matilda.jpg");
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
}

h1 {
  font-size: 8em;
  font-family: "Bellota";
  ${'' /* margin-top: 1%;
  margin-bottom: 1%; */}
  display: flex;
  
}

h1,
h2,
h3 {
  color: #84142d;
  margin: 3%;
  
}

h2{${'' /* font-family: "Bellota"; */}
  font-size: 3rem;
  margin-bottom: 3%;
}

h3 {
  ${'' /* display: flex;
  flex-direction: column;
  align-self: center; */}
  font-size: 2rem;
  margin-top: 0;

}


`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const slides = [
    {
        content:   <StyleHome>
        <section className="hem-container">
          <h1>Yogasyster</h1>
          <h2>Utbildad Yogalärare</h2>
          <h3>Legitimerad Arbetsterapeut och massör</h3>
        </section>
      </StyleHome>,
        style: {
            backgroundImage: `url(${Matilda})`,
          
        }
    },
    {
        content: <div>second page content</div>,
        style: {
            backgroundImage: `url(${Matilda})`
        }
    },
    {
        content: <div>third page content</div>,
        style: {
            backgroundImage: `url(${Matilda})`
        }
    },
];
  return (
      <PageSlides
          enableAutoScroll={true}
          transitionSpeed={1000}
          slides={slides}
          parallax={{
              offset: 0.6,
              type: SlideParallaxType.reveal
          }}
      />
  )
};
export default Home;
