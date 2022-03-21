import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import CitiesProvider from './provider/CitiesProvider';

ReactDOM.render(
  <BrowserRouter>
    <CitiesProvider>
      <App />
    </CitiesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
