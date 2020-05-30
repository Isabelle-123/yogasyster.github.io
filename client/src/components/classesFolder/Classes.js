import React, { Component } from 'react'
import styled from 'styled-components'
// import Events from './Events';
// import Hatha from './Hatha';
// import Privatlektioner from './Privatlektioner';

const yogaklassPic = require('../pics/yogaklass-massage-yogasyster.jpg')
const yogaklassPicSmall = require('../pics/yogaklass-massage-yogasyster-matilda.jpg')
// const hathaPic = require('../pics/björk.jpg');
// const privatPic = require('../pics/björk.jpg');
// const eventPic = require('../pics/björk.jpg');
const björkPic = require('../pics/björk.jpg')

const StyleClasses = styled.div`
  .pic-big-screen {
    display: none;
  }
  
  .pic-small-screen {
    height: auto;
    width: 100%;
    display: flex;

    ${
      '' /* height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; */
    }
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
    width: 290px;
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

  @media only screen and (min-width: 1441px) {
    .pic-big-screen {
      height: auto;
      width: 100%;
      display: flex;

    }
  
    .pic-small-screen {
      display: none;
    }
`

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = { show: [false, false, false] }
  }

  changeName() {
    let text = 'text '
    text += this.state.show === true ? 'hide' : 'show'
    return text
  }
  showHide(num) {
    this.setState((prevState) => {
      const newItems = [...prevState.show]
      newItems[num] = !newItems[num]
      return { show: newItems }
    })
  }

  render() {
    return (
      <StyleClasses>
        <img
          src={yogaklassPic}
          className='pic-small-screen'
          alt='Yogasyster Matilda håller i yogaklass'
        />
        <img
          src={yogaklassPicSmall}
          className='pic-big-screen'
          alt='Yogasyster Matilda håller i yogaklass'
        />

        <h1>Yogaklasser</h1>
        <div className='card-container'>
          <div className='card'>
            <h3>Kalender</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button onClick={() => this.showHide(0)}>
              {/* {this.changeName()}  */}
              Läs mer
            </button>

            {this.state.show[0] && (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
                sint voluptate saepe reiciendis officia veritatis facilis vitae
                veniam. Unde hic laborum debitis explicabo quaerat animi
                necessitatibus maiores, rerum aliquam exercitationem!
              </p>
            )}
          </div>

          <div className='card'>
            <h3>Hatha Yoga</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button onClick={() => this.showHide(1)}>
              Läs mer
              {/* {this.changeName()} */}
            </button>
            {this.state.show[1] && (
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quam, sint voluptate saepe reiciendis officia veritatis
                  facilis vitae veniam. Unde hic laborum debitis explicabo
                  quaerat animi necessitatibus maiores, rerum aliquam
                  exercitationem!
                </p>
              </div>
            )}
          </div>
          <div className='card'>
            <h3>Privatlektioner</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button onClick={() => this.showHide(2)}>
              Läs mer
              {/* {this.changeName()} */}
            </button>
            {this.state.show[2] && (
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quam, sint voluptate saepe reiciendis officia veritatis
                  facilis vitae veniam. Unde hic laborum debitis explicabo
                  quaerat animi necessitatibus maiores, rerum aliquam
                  exercitationem!
                </p>
              </div>
            )}
          </div>
        </div>
      </StyleClasses>
    )
  }
}

export default Classes

/* /* 
<li>
Hatha Yoga
<button onChange={toggle}>Läs mer</button>
{isShowing && (
  <div className='info-panel'>
    <Hatha>{props.children}</Hatha>
  </div>
)}
</li>
<li>
Privatlektioner
<button onClick={toggle}>Läs mer</button>
{isShowing && (
  <div className='info-panel'>
    <Privatlektioner>{props.children}</Privatlektioner>
  </div>
)}
</li> }
*/
/* 
{<li>
Events
<button onClick={() => setShowing(!isShowing)}>Läs mer</button>
{isShowing && (
  <div className='info-panel'>
    <Events />
  </div>
)}
</li> } 
*/
