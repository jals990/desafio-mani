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
    --red: #e7202d;
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

    @media (max-width: 1088px){
      font-size: 93.75%;
    }
    @media (max-width: 788px){
      font-size: 87.5%;
    }

  }

  body {
    display: block;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  .navigation {
    width: 50vw;  
    height: 60px;
    background: var(--text-title);
    color: var(--white);
    -webkit-box-shadow: 0 2px -14px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px -14px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
      width: 120px;
      margin: 0 12px;
      color: var(--dark);
      border: none;
      border-radius: 4px;
      padding: 4px;
      background: var(--green);
    }
    
    @media (max-width: 768px){
      width: 500px;
    }

    @media (max-width: 426px){
      width: 100%;
    }
  }

  .svg-red{
    color: var(--red);
  }

  .svg-green{
    color: var(--green);
  }

  .svg-yellow{
    color: var(--yellow);
  }

`;
