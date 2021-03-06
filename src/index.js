import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './Body';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store'


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <Body />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
