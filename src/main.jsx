import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { RestaurantApp } from './RestaurantApp';
import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
      <RestaurantApp />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
