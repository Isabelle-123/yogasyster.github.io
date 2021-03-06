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
    font-weight: 500;
  }

  .link > img {
    width: 290px;
    height: 320px;
    border-radius: 5px;
    margin-bottom: 3%;
  }

  ${'' /* slide 2 big screen */}
  @media only screen and (min-width: 1441px) {
    .card {
      transform: scale(1.3);
    }
  }

  ${'' /*slide 2 towards tablet */}
  @media  screen and (max-width: 970px) {
    .card {
      width: auto;
    }

    .link {
      font-size: 24px;
    }

    .link > img {
      width: 27vw;
      height: 30vh;
    }
  }

  ${'' /* slide 2 tablet */}
  @media only screen and (max-width: 790px) {
    .card-container {
      align-content: center;
    }

    .card {
      width: 100%;
    }

    .link {
      width: 100%;
      flex-direction: row;
    }

    .link > img {
      height: 240px;
      width: 200px;
      margin: 0 3% 0 10%;
    }
  }

  ${'' /* slide 2 mobile view */}
  @media only screen and (max-width: 540px) {
    .link > img {
      height: 140px;
      width: 110px;
    }
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5px;
      width: 200px;
      padding: 1%;
    }

    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1em;
    }

    .link > img {
      height: 200px;
      width: 170px;
      margin-bottom: 5px;
    }
  }

  @media only screen and (orientation: landscape) and (max-width: 450px) {
    .card {
      width: auto;
    }

    .link {
      flex-direction: column;
      font-size: 0.6em;
    }

    .link > img {
      height: 110px;
      width: 90px;
    }
  }
`
