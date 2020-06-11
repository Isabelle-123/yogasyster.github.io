import styled from 'styled-components'
import Matilda from '../assets/images/hemsida-yogasyster-matilda.jpg'

export const StyleHome = styled.section`

  .slide-one-container {
    background-image: url(${Matilda});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 

  .container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 20% 0% 55%;
    color: #84142d;
  }

  h1 {
    font-size: 8vw;
    font-family: 'Bellota';
    margin: 10% 3% 3% 3%;

  }

  h2 {
    font-size: 3vw;
    margin: 3%;
    font-weight: 500;
  }

  h3 {
    font-size: 2vw;
    margin-top: 0;
    font-weight: 500;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 90vh;
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


  ${'' /* slide 1 xl screen */}
  @media only screen and (max-width: 2440px) {
    .slide-one-container {
    background-position: 1%;    
    }
    
    h1 {
    font-size: 15vh;
    margin: 0;
    }

    h2 {
    font-size: 5vh;
    margin: 3% 0% 3% 0%;
    }

    h3 {
    font-size: 4vh;
    margin:0;
    }    
  }

  ${'' /* slide 1 tablet */}
  @media only screen and (max-width: 1000px) {
    .slide-one-container {
    background-position: 40%;
    }

    .container {
      margin: 8% 0% 0% 0%;
      width: 90%;
    }

    h1 {
    font-size: 12vh;
    margin: 0;
    }

    h2 {
    font-size: 5vh;
    margin: 2% 0% 1% 0%;
    }

    h3 {
    font-size: 3vh;
    margin:0;
    }
  }
 

  ${'' /* slide 1 mobile */}
  @media only screen and (max-width: 426px) {
    .container {
      margin: 15% 0% 0% 0%;
    }

    h1 {
    font-size: 18vw;
  }

  h2 {
    font-size: 8vw;
    margin: 5% 0% 1% 0%;
  }

  h3 {
    font-size: 4.5vw;
    margin: 5% 0% 1% 0%;
  }
  }

  @media only screen and (max-width: 760px) {
  .slide-one-container {
    background-image: url(${Matilda});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  
  }
  ${'' /* slide 2 ipad */}
  @media  screen and (max-width: 970px) {
    .card-container {
      margin-top: 10%;
      flex-direction: column;
      align-items: center;
    
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
      margin-top: 15%;
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
