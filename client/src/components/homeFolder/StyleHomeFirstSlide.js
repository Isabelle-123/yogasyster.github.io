import styled from 'styled-components'
import Matilda from '../assets/images/hemsida-yogasyster-matilda.jpg'

export const StyleHomeFirstSlide = styled.section`

  .slide-one-container {
    background-image: url(${Matilda});
    background-size: cover;
    height: 100vh;
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
    font-family: 'Bellota', 'Helvetica', 'Arial', 'sans-serif';
    margin: 10% 3% 5% 3%;
  }

  h2 {
    font-size: 2vw;
    margin: 0% 0% 3% 0%;
    font-weight: 500;
    text-align: center;
  }
}


  ${'' /* slide 1 xl screen */}
  @media only screen and (min-width: 1700px) {
    .slide-one-container {
    background-position: 1%;    
    }
    
    h1 {
    font-size: 15vh;
    margin: 0% 0% 5% 0%;
    }

    h2 {
    font-size: 4vh;
    margin: 0% 0% 3% 0%;
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
      width: 95%;
      text-align: center;
    }

    h1 {
      font-size: 10vh;
      margin: 0% 0% 3% 0%;
      
    }

    h2 {
      font-size: 3vh;
      margin: 0% 0% 1% 0%;
    }

  }
 

  ${'' /* slide 1 mobile */}
  @media only screen and (max-width: 426px) {
    .container {
      margin: 15% 0% 0% 0%;
    }

    h1 {
    font-size: 18vw;
    margin: 0% 0% 5% 0%;
    }

    h2 {
      font-size: 7vw;
      margin: 0% 0% 3% 0%;
    }
  }
`
