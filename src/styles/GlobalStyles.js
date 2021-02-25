import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    color: var(--black);
    font: 14px 'Rubik', sans-serif;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    background-color: #3B989E;
  }

  *, button, input {
    border: 0;
    background: none;    
  }

  :root {
    --primary: #3B989E;
    --white: #D9D9D9;
  }
`;