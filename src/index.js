import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './mobx/index';
import Router from './route/index.js';
import reportWebVitals from './reportWebVitals';
import '@styles/common.less';
import './index.css';

ReactDOM.render(
  <Provider {...stores} >
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
