import styled from 'styled-components'

export const StyleHomeThirdSlide = styled.section`
  .insta-container {
    height: 100vh;
  }
  .instagram-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-title {
    color: #8d6262;
    font-size: 2em;
    font-weight: 500;
  }

  ${'' /* ipad */}
  @media only screen and (max-width: 970px) {
    .instagram-title-container {
    }
    .instagram-title {
      color: #8d6262;
      font-size: 24px;
      text-align: center;
    }
  }

  ${'' /* mobile */}
  @media only screen and (max-width: 637px) {
  }
`
