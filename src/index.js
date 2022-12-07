import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

// 设置rem，以屏幕宽度划分750份，1rem代表7.5px
document.documentElement.fontSize = (100 / 750) + 'vw';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();
