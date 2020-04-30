import React, { Component } from 'react';
import styled from 'styled-components';
// import Events from './Events';
// import Hatha from './Hatha';
// import Privatlektioner from './Privatlektioner';

const yogaklassPic = require('../pics/yogaklass-massage2.jpg');
// const hathaPic = require('../pics/björk.jpg');
// const privatPic = require('../pics/björk.jpg');
// const eventPic = require('../pics/björk.jpg');
const björkPic = require('../pics/björk.jpg');

const StyleClasses = styled.div`
  img {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    display: flex;
    justify-content: center;
    color: #84142d;
    font-family: Zeyada;
    font-size: 3rem;
    margin-top: 3%;
    margin-bottom: 0%;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    ${'' /* margin-left: 10%; */}
    width: 100%;
    ${'' /* justify-content: space-evenly;
    align-items: center;
    list-style: none; */}
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    border: white 1px solid;
  }

  .card > img {
    width: 290px;
    height: auto;
  }

  h3 {
    color: #393232;
    text-align: justify;
    line-height: 130%;
    font-size: 0.9em;
  }
`;

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = { show: [false, false, false] };
  }

  changeName() {
    let text = 'text ';
    text += this.state.show === true ? 'hide' : 'show';
    return text;
  }
  showHide(num) {
    this.setState((prevState) => {
      const newItems = [...prevState.show];
      newItems[num] = !newItems[num];
      return { show: newItems };
    });
  }

  render() {
    return (
      <StyleClasses>
        <img src={yogaklassPic} alt='Yogasyster Matilda håller i yogaklass' />

        <h1>Yogaklasser</h1>
        <div className='container'>
          <div className='card'>
            <h3>Hatha Yoga</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button
              onClick={() => this.showHide(0)}
              className='button-primary btn'
            >
              {this.changeName()}
            </button>
            {this.state.show[0] && <div> teeext</div>}
          </div>
          <div className='card'>
            <h3>Privatlektioner</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button
              onClick={() => this.showHide(1)}
              className='button-primary btn'
            >
              {this.changeName()}
            </button>
            {this.state.show[1] && (
              <div>
                <p>text</p>
              </div>
            )}
          </div>
          <div className='card'>
            <h3>Events</h3>
            <img src={björkPic} className='björkPic' alt='x' />
            <button
              onClick={() => this.showHide(2)}
              className='button-primary btn'
            >
              {this.changeName()}
            </button>
            {this.state.show[2] && (
              <div>
                <p>text</p>
                <p>text</p>
              </div>
            )}
          </div>
        </div>
      </StyleClasses>
    );
  }
}

export default Classes;

{
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
}
