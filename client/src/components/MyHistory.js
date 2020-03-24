import React from "react";
import styled from "styled-components";
//import { StyleHome } from "react-router-dom";

const skogImg = require("./pics/4.DSC_05271.jpg");


const StyleHistory = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2px, 3px, 0px 3px;

  height: auto;
  
  /* .profilImg {
    border-radius: 600px;
    height: 10%;
    width: auto;
    margin-top: 6%;
  } */

  img {
    height: auto;
    width: 50%;
    display: flex;
    border-radius: 5px;
    margin: 1%;
  }

  h1 {
    color: #84142d;
    font-family: Bellota;
    font-size; 5rem;
  }

  p {
    color: #393232;
    margin-left: 15%;
    margin-right: 15%;
    text-align: justify;
    line-height: 130%;
    font-size: 1.5rem;

  }

  .namaste {
    font-family: Zeyada;
    font-size: 100px;
    color: #8d6262;
  }
`;

/* 
#393232
#4d4545
vinröd 84142d
brunrosa 8d6262
rosa ed8d8d
puder f3d4d4
beige ffebd9 

 // "Zeyada",
  //   "Bellota",*/

const MyHistory = () => {
  return (
    <StyleHistory>
    
      <h1>Det var yogan som hittade mig!</h1>

      <p>
        {" "}
        En sökande person, med höga krav på sig själv, som alltid varit upptagen
        av 1000 tankar samtidigt och oroat sig för framtiden. Innan yogan kom in
        i bilden prövade jag på strategin “resa till andra platser för att hitta
        mig själv”. Den där “inre kompassen” borde väl ändå finnas på andra
        sidan jorden?{" "}
      </p>
      <p>
        Efter varje resa inser jag att i ryggsäcken ligger också mitt inre
        bagage som jag i så många år burit runt på, packat ner, packat om och
        rest vidare. Efter den insikten får jag en yoga-dvd i
        inflyttningspresent, min syster flyttar till Kalifornien och bästisen
        reser till Indien.
      </p>
      <p>
        Dvd:n, reseberättelserna från Indien och Kalifornien bidrar till att
        yogan kommer in i mitt liv. Jag börjar följa träningsprogrammen på
        dvd:n, köper yogatidningar och får frågan, vill du följa med till
        Indien?
      </p>
      <img src={skogImg} />
      <p>
        Varför inte göra ett nytt försök till att hitta den “inre kompassen” på
        andra sidan jorden? Vi checkar in på ett ashram i Rishikesh och vänder
        nu uppmärksamheten inåt. Jag öppnas upp för en värld där asanas är ett
        verktyg för att komma djupare i sin egen meditation och spirituella
        sökande. På min tallrik serveras ett helhetstänk som jag i så många år
        har letat efter och som jag fortfarande vill lära mig mer om.{" "}
      </p>
      <p>
        {" "}
        Inom yogan hittar jag svar och strategier till att våga vara kvar i mig
        själv, vara i nuet, acceptera tankar och jag lär mig nya saker hela
        tiden! Jag är fortfarande så tacksam för att jag och yogan hittade
        varandra och är mer än motiverad till att fördjupa den relationen genom
        att även lära ut yoga till andra.{" "}
      </p>
      <p>
        {" "}
        Att få jobba med kombinera mina erfarenheter som arbetsterapeut inom
        rehabilitering i sjukvårdensvärld med kunskaperna som yogalärare är
        drömmen. Jag vill vara med och bidra till att fler får upp ögonen för
        ”the power of yoga” och även hittar verktygen till att implementera det
        i sin vardag utanför mattan!  
      </p>
      <h1 className="namaste"> Namasté Matilda Edén</h1>
    </StyleHistory>
  );
};

export default MyHistory;
