import styled from 'styled-components'

export const StyleHomeSecondSlide = styled.section`
  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;   
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
  ${'' /*slide 2 towards tablet */}
  @media  screen and (max-width: 970px) {
    
    .card {
      width: auto;
    }

    .link {
      flex-direction: column;
      align-items: center;
      font-size: 1.5em;
      color:red;
    }

    .link > img { 
      width: 25vw;
      height: 25vh;
      margin-right: 5%;
      margin-left: 5%;
    }
  }

  ${'' /* slide 2 tablet */}

@media only screen and (max-width: 790px) {
  
  .card-container {
   justify-content: space-evenly;
  }
  
  .card {
    width: 100%;
  }

  .link {
    width: 100%;
    color:green;
    flex-direction: row;
  }

  .link > img { 
    height: 240px;
    width: 200px;
  }
}


${'' /* slide 2 mobile view */}

  @media only screen and (max-width: 540px) {
    .card-container {
     
    }
    
    .card {
     justify-content: center;
      width: 100%;
    }

    .link {
      flex-direction: row;
      width: 100%;
      color:blue;
    }

    .link > img { {
      height: 140px;
      width: 110px;
      margin-right: 5%;
      margin-left: 5%;
    }
  }

`
