import { createGlobalStyle } from 'styled-components'
import { PropsTheme } from '../Theme'

export const GlobalStyle = createGlobalStyle<PropsTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {   
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    width: 100vw;    

    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    font: inherit;
    font-size: 0.85rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2rem;
    outline: none;

    cursor: pointer;

    border: none;
    border-radius: 0.5rem;

    transition: 0.75s;
  }

  @media (max-width: 480px) {    
    body {
      font-size: 0.75rem;
    }  
    
  }
`
