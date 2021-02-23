import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-Bold.ttf");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-Regular.ttf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-Medium.ttf");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-SemiBold.ttf");
    font-weight: 600;
    font-style: normal;
  }

  body, input, label, span {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif !important;
  }

  body {
    background-color: #FAF5FF;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  .flex-1 {
    flex: 1;
  }

  .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .bg-body {
    background-color: #FAF5FF;
  }

  .without-border {
    border: none;
  }

  .w-16 {
    width: 16rem;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

`