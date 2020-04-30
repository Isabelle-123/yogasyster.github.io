import React, {useState} from "react"

const yogaklassPic = require ("./pic/yogaklass-massage.jpg")
const hathaPic = require ("./pic/yogaklass-massage.jpg")
const privatPic = require ("./pic/yogaklass-massage.jpg")
const eventPic = require ("./pic/yogaklass-massage.jpg")

const Classes = () => {
  const [isShowing, setShowing] = useState(false)

    // klicka button och visa p tag



  return (
      <> 
      <img src = {yogaklassPic} alt="Yogasyster Matilda håller i yogaklass" />
          
      <h1>Yogaklasser</h1>
      <ul>
          <li>Hatha yoga</li>
          <button>LÄS MER</button>
          <li>Privatlektioner</li>
          <button>LÄS MER</button>

          <li>Events
            <button onClick={ () => setShowing(!isShowing)}>LÄS MER </button>
            <p >texxxxxxxxxxxxxxxxxxxxxxxt</p>
          </li>
      </ul>
      </>
    )

}

export default Classes;

// const CheckBox = () => {
//     const [ isDisabled, setDisabled ] = useState(true)
    
//    return (
//     <div>
//         <input type="text" disabled={ isDisabled }/>
//         <input type="checkbox" onClick={ () => setDisabled(!isDisabled) }/>
//     </div>
       
//     )
//    }