import styled from 'styled-components'

export const StyleAbout = styled.div`
display: flex;
flex-direction: column;

.pic-big-screen {
  display: none;
  border-radius: 5px;
}

.pic-small-screen {
  height: auto;
  width: 100%;
  display: flex;
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  align-items: center;
  text-align: center;
}

h1 {
  color: #84142d;
  font-family: Zeyada;
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 0%;

${'' /* //maybe this */}
  color: #393232;
  opacity: 70%;
  font-family: arial;
  font-size: 2em;
  font-weight: 100;
}

p {
  color: #393232;
  text-align: justify;
  line-height: 130%;
  font-size: 0.9em;
}

.namaste {
  font-family: Zeyada;
  font-size: 1.2em;
  color: #393232;
  margin: 2% 0 0 0;
  padding: 0%;
}

.matilda {
  font-family: Zeyada;
  font-size: 1.2em;
  color: #393232;
  margin: 0 0 2% 0;
}

@media only screen and (min-width: 1441px) {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .pic-big-screen {
    display: inherit;
    height: 700px;
    margin: 5% 0% 5% 5%;
    border-radius: 5px;
  }

  .pic-small-screen {
  display: none;
  }

  .text-container {
    width: 600px;
    margin: 5% 5% 5% 5%;
    padding: 0;
  }

  h1 {
  ${'' /* color: #84142d;
  font-family: Zeyada;
  font-size: 2.5em; */}
  ${'' /* color: #4d4545; */}
  ${'' /* color: white;
  background: #4d4545; */}
  color: #393232;
  
  font-family: arial;
  font-size: 2em;
  font-weight: 100;
  padding: 10px;
  opacity: 70%;
}

  .namaste, .matilda {
    margin-top: 0;
    ${'' /* align-self: flex-end; */}
  }
}

}
`
