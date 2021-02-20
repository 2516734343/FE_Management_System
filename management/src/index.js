import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "mobx-react";
import loginStore from './models/store';

// 状态始终需要通过动作来更新(实际上还包括创建)
// configure({'enforceActions': 'always'});
const stores = {loginStore}
ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
