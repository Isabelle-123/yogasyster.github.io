import React from 'react'
import styled from 'styled-components'

const StylePopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function PopUp() {
  var popup = document.getElementById('myPopup')
  popup.classList.toggle('show')

  return <div></div>
}

export default PopUp

function popUp() {
  ;<div>hejjhej meddelande skickat</div>
}
