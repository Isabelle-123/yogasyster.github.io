import styled from 'styled-components'

export const StyleHomeSecondSlide = styled.section`


  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
   ${'' /* // margin-top: 30vh; */}


      
      
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
  ${'' /* slide 2 ipad */}
  @media  screen and (max-width: 970px) {
    .card-container {
      display: flex;
      margin-top: 10%;
      flex-direction: row;
      justify-content:space-evenly;
      align-items: center;
    }
    
    .card {
      width: auto;
    }

    .link {
      flex-direction: column;
      align-items: center;
      font-size: 1.5em;
      

    }
    .link > img { {
      width: 25vw;
      height: 25vh;
      margin-right: 5%;
      margin-left: 5%;
    }
  }

${'' /* slide 2 mobile view */}

  @media only screen and (max-width: 540px) {
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
