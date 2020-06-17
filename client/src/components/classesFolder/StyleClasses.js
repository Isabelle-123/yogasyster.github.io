import styled from 'styled-components'

export const StyleClasses = styled.div`
  .pic-big-screen {
    display: none;
  }

  .pic-small-screen {
    height: auto;
    width: 100%;
    display: flex;
  }

  ${'' /* h1 {
    display: flex;
    justify-content: center;
    color: #84142d;
    font-family: Zeyada;
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 0;
  } */}

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    width: 290px;
    padding: 1%;
  }

  .card > img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .link-title {
    text-decoration: none;
    color: #8d6262;
  }

  h1 {
    color: #8d6262;
    font-size: 2em;
    font-weight: 500;
    margin-top: 10px;
    text-decoration: none;
  }

  p,
  .link-text {
    display: flex;
    color: #393232;
    text-align: justify;
    line-height: 130%;
    font-size: 0.9em;
    margin-top: 0;
    padding: 5%;
    text-decoration: none;
  }

  ${'' /* big screen */}
  @media only screen and (min-width: 1441px) {
    .pic-big-screen {
      height: auto;
      width: 100%;
      display: flex;
    }

    .pic-small-screen {
      display: none;
    }
  }

  ${'' /* ipad */}
  @media only screen and (max-width: 970px) {
    .card {
      width: 30vw;
      height: auto;
    }

    h1 {
      font-size: 2.5vh;
    }
  }

  ${'' /* mobile */}
  @media only screen and (max-width: 637px) {
    .card-container {
      flex-direction: column;
      align-items: center;
    }
    .card {
      width: 65vw;
      height: auto;
    }

    h1 {
      font-size: 24px;
    }
  }
`
