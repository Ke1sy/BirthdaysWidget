import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components"
import './assets/fonts/fonts.css';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: 'Vodafone Rg', sans-serif;
    * {
       box-sizing: border-box; 
    }
  }
  .container {
     max-width: 1600px;
  }
`;

ReactDOM.render(
    <React.Fragment>
        <App/>
        <GlobalStyle/>
    </React.Fragment>, document.getElementById('root')
);

