import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import { RestaurantApp } from './RestaurantApp';
import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantApp />
    </BrowserRouter>
  </React.StrictMode>
)