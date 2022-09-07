import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { RestaurantApp } from './RestaurantApp';
import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RestaurantApp />
    </HashRouter>
  </React.StrictMode>
)
