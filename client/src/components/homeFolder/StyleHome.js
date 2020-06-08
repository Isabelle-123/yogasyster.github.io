import styled from 'styled-components'

export const StyleHome = styled.section`
  ${'' /* img {
  height: auto;
  width: 100%;
  display: flex;
} */}

  display: flex;

  flex-direction: column;
  align-items: center;

  .container {
    width: 40%;
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    align-items: center;
    margin: 8% 20% 0% 55%;
    color: #84142d;
  }

  h1 {
    font-size: 8vw;
    font-family: 'Bellota';
    ${'' /* font-family: 'Zeyada'; */}
    margin: 10% 3% 3% 3%;

  }

  h2 {
    font-size: 3vw;
    margin: 3%;
  }

  h3 {
    font-size: 2vw;
    margin-top: 0;
    font-weight: 400;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 80vh;
    margin-top: 30vh;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    width: 290px;
    padding: 1%;
  }

  .link {
    color: #8d6262;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    text-decoration: none;
  }

  .link > img {
    width: 290px;
    height: 320px;
    border-radius: 5px;
   
  }

  ${'' /* slide 1 tablet */}
  @media only screen and (max-width: 768px) {
    .container {
      justify-content: center;
      margin: 8% 0% 0% 0%;
      width: 90%;
      ${'' /* color: #794051;
      color: #A24744; */}
    }

    h1 {
    font-size: 10vw;
    margin: 0;
  }

  h2 {
    font-size: 5vw;
  }

  h3 {
    font-size: 3vw;
  }

  ${'' /* slide 1 mobile */}
  @media only screen and (max-width: 760px) {
    .container {
      justify-content: center;
      margin: 18% 0% 0% 0%;
      width: 90%;
    }

    h1 {
    font-size: 15vw;
  }

  h2 {
    font-size: 8vw;
  }

  h3 {
    font-size: 5vw;
  }
  }
  
  ${'' /* slide 2 ipad */}
  @media  screen and (max-width: 970px) {
    .card-container {
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
      height: 100%
    }
    
    .card {
      width: 400px;
    }

    .link {
      flex-direction: row;
      width: 400px;

    }
    .link > img { {
      height: 180px;
      width: 160px;
      margin-right: 5%;
      margin-left: 5%;
    }
  }

${'' /* slide 2 mobile view */}

  @media only screen and (max-width: 425px) {
    .card-container {
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
    }
    
    .card {
     justify-content: center;
      width: 100%;
    }

    .link {
      flex-direction: row;
      width: 100%;

    }
    .link > img { {
      height: 140px;
      width: 110px;
      margin-right: 5%;
      margin-left: 5%;
    }
  }


`
