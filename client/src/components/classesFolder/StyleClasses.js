import styled from 'styled-components'

export const StyleClasses = styled.div`
  .pic-big-screen {
    display: none;
  }

  .pic-small-screen {
    height: auto;
    width: 100%;
    display: flex;

    ${'' /* height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; */}
  }

  h1 {
    display: flex;
    justify-content: center;
    color: #84142d;
    font-family: Zeyada;
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 0;
  }
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

  h3 {
    color: #8d6262;
    font-size: 1.3em;
    margin-top: 10px;
  }

  p {
    display: flex;
    color: #393232;
    text-align: justify;
    line-height: 130%;
    font-size: 0.9em;
    margin-top: 0;
  }

  button {
    width: 80px;
    background-color: white;
    color: #8d6262;
    line-height: 130%;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    margin: 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background-color: #8d6262;
    color: white;
  }

  button:focus {
    ${'' /* outline-color: #4d4545; */}
    outline-color: #f3d4d4;
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
      width: 200px;
      height: auto;
    }
  }

  ${'' /* mobile */}
  @media only screen and (max-width: 637px) {
    .card-container {
      flex-direction: column;
      align-items: center;
    }
  }
`
