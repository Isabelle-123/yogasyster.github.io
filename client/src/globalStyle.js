import { createGlobalStyle } from 'styled-components'
import FontBellota from './components/assets/fonts/Bellota-Regular.woff'
import FontBellota2 from './components/assets/fonts/Bellota-Regular.woff2'
import FontZeyada from './components/assets/fonts/Zeyada-Regular.woff'
import FontZeyada2 from './components/assets/fonts/Zeyada-Regular.woff2'

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  body {
    background-color: #faece0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
  }

  
  @font-face {
    font-family: 'Bellota';
    font-weight: 400;  
    font-style: normal;  
    font-display: swap; /* Read next point */  
    unicode-range: U+000-5FF; /* Download only latin glyphs */  
    src: local('Bellota'), url(${FontBellota2}) format('woff2'), url(${FontBellota}) format('woff');
  }

  @font-face {
    font-family: 'Zeyada';
    font-weight: 400;  
    font-style: normal;  
    font-display: swap; /* Read next point */  
    unicode-range: U+000-5FF; /* Download only latin glyphs */  
    src: local('Zeyada'), url(${FontZeyada2}) format('woff2'),
      url(${FontZeyada}) format('woff');
  }
`

export default GlobalStyle
