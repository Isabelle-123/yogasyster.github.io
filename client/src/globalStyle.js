import { createGlobalStyle } from 'styled-components'
import FontBellota from './components/assets/fonts/Bellota-Regular.ttf'
import FontBellota2 from './components/assets/fonts/Bellota-Regular.woff'
import FontBellota3 from './components/assets/fonts/Bellota-Regular.woff2'
import FontZeyada from './components/assets/fonts/Zeyada-Regular.ttf'
import FontZeyada2 from './components/assets/fonts/Zeyada-Regular.woff'
import FontZeyada3 from './components/assets/fonts/Zeyada-Regular.woff2'

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
    src: local('Bellota'), local('Bellota'), url(${FontZeyada}) format('ttf'),
      url(${FontBellota2}) format('woff'), url(${FontBellota3}) format('woff2');
  }
  @font-face {
    font-family: 'Zeyada';
    src: local('Zeyada'), local('Zeyada'), url(${FontBellota}) format('ttf'),
      url(${FontZeyada2}) format('woff'), url(${FontZeyada3}) format('woff2');
  }
`

export default GlobalStyle
