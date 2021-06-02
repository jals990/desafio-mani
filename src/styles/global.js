import { createGlobalStyle } from "styled-components";
import 'rsuite/dist/styles/rsuite-default.css';

export default createGlobalStyle`
  :root {
    --background: #9c92ac;
    --white: #f0f2f5;
    --text-title: #6c63ff; 
    --text-body: #9179BA;
    --dark: #090c15;
    --yellow: #ff9e43;
    --green: #04d361;
  }
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--white);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.22'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  }

  body {
    display: block;
    -webkit-font-smoothing: antialiased;
  }

  .img-logo {
    width: 250px;
    height: 250px;
  }

  button {
    cursor: pointer;
  }

`;
