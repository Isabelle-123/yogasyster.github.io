import React, { Component } from 'react'
import { StyleClasses } from './StyleClasses'
import yogaklassPic from '../assets/images/yogaklass-massage-yogasyster.jpg'
import yogaklassPicSmall from '../assets/images/yogaklass-massage-yogasyster-matilda.jpg'
import björkPic from '../assets/images/björk.jpg'

// import Events from './Events';
// import Hatha from './Hatha';
// import Privatlektioner from './Privatlektioner';

// const yogaklassPic = require('../pics/yogaklass-massage-yogasyster.jpg')
// const yogaklassPicSmall = require('../pics/yogaklass-massage-yogasyster-matilda.jpg')

// const hathaPic = require('../pics/björk.jpg');
// const privatPic = require('../pics/björk.jpg');
// const eventPic = require('../pics/björk.jpg');
// const björkPic = require('../pics/björk.jpg')

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
