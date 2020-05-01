import React, { useEffect } from 'react';
import styled from 'styled-components';
//import { StyleHome } from "react-router-dom";

const omYogasyster = require('./pics/om-yogasyster-matilda-edén.jpg');
const omYogasysterSmall = require('./pics/om-yogasyster-matilda.jpg');

const StyleHistory = styled.div`
  display: flex;
  flex-direction: column;

  .pic-big-screen {
    display: none;
    border-radius: 5px;
  }
  
  .pic-small-screen {
    height: auto;
    width: 100%;
    display: flex;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  h1 {
    color: #84142d;
    font-family: Zeyada;
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 0%;
  }

  p {
    color: #393232;
    text-align: justify;
    line-height: 130%;
    font-size: 0.9em;
  }

  .namaste {
    font-family: Zeyada;
    font-size: 1.2em;
    color: #393232;
    margin: 2% 0 0 0;
    padding: 0%;
  }

  .matilda {
    font-family: Zeyada;
    font-size: 1.2em;
    color: #393232;
    margin: 0 0 2% 0;
  }

  ${'' /* @media only screen and (min-width: 1025px) { */}
  @media only screen and (min-width: 1441px) {
    display: flex;
    flex-direction: row;

  justify-content: center;

    .pic-big-screen {
      display: inherit;
 
      height: 700px;
      ${'' /* width: 40%;
      height: auto; */}
      margin: 5% 0% 5% 5%;
      border-radius: 5px;
    }
  
    .pic-small-screen {
    display: none;
    }

    .text-container {
      ${'' /* width: 60%; */}
      width: 600px;
      margin: 5% 5% 5% 5%;
      ${'' /* font-size: 1em; */}
      padding: 0;
    }

    h1 {
    color: #84142d;
    font-family: Zeyada;
    font-size: 2.5em;
  }

    .namaste, .matilda {
      margin-top: 0;
      ${'' /* align-self: flex-end; */}
    }
  }

}
`;

const MyHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <StyleHistory>
        <img
          className='pic-small-screen'
          src={omYogasyster}
          alt='Yogasyster Matilda mediterar i skogen'
        />
        <img
          className='pic-big-screen'
          src={omYogasysterSmall}
          alt='Yogasyster Matilda mediterar i skogen'
        />
        <section className='text-container'>
          <h1>Det var yogan som hittade mig</h1>

          <p>
            En sökande person, med höga krav på sig själv, som alltid varit
            upptagen av 1000 tankar samtidigt och oroat sig för framtiden. Innan
            yogan kom in i bilden prövade jag på strategin “resa till andra
            platser för att hitta mig själv”. Den där “inre kompassen” borde väl
            ändå finnas på andra sidan jorden?
          </p>
          <p>
            Efter varje resa inser jag att i ryggsäcken ligger också mitt inre
            bagage som jag i så många år burit runt på, packat ner, packat om
            och rest vidare. Efter den insikten får jag en yoga-dvd i
            inflyttningspresent, min syster flyttar till Kalifornien och
            bästisen reser till Indien.
          </p>
          <p>
            Dvd:n, reseberättelserna från Indien och Kalifornien bidrar till att
            yogan kommer in i mitt liv. Jag börjar följa träningsprogrammen på
            dvd:n, köper yogatidningar och får frågan, vill du följa med till
            Indien?
          </p>

          <p>
            Varför inte göra ett nytt försök till att hitta den “inre kompassen”
            på andra sidan jorden? Vi checkar in på ett ashram i Rishikesh och
            vänder nu uppmärksamheten inåt. Jag öppnas upp för en värld där
            asanas är ett verktyg för att komma djupare i sin egen meditation
            och spirituella sökande. På min tallrik serveras ett helhetstänk som
            jag i så många år har letat efter och som jag fortfarande vill lära
            mig mer om.
          </p>
          <p>
            Inom yogan hittar jag svar och strategier till att våga vara kvar i
            mig själv, vara i nuet, acceptera tankar och jag lär mig nya saker
            hela tiden! Jag är fortfarande så tacksam för att jag och yogan
            hittade varandra och är mer än motiverad till att fördjupa den
            relationen genom att även lära ut yoga till andra.{' '}
          </p>
          <p>
            Att få jobba med kombinera mina erfarenheter som arbetsterapeut inom
            rehabilitering i sjukvårdens värld med kunskaperna som yogalärare är
            drömmen. Jag vill vara med och bidra till att fler får upp ögonen
            för ”the power of yoga” och även hittar verktygen till att
            implementera det i sin vardag utanför mattan!  
          </p>
          <h2 className='namaste'> Namasté</h2>
          <h3 className='matilda'> Matilda Edén</h3>
        </section>
      </StyleHistory>
    </>
  );
};

export default MyHistory;
