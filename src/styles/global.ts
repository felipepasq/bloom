import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.small_paragraph};
  }

  html {
  font-size: 62.5%;
  }
  
  body  {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

  button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

`

export default GlobalStyle
