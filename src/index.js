import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Bar from './pages/Bar/Bar';
import Canopy from './pages/Canopy/canopy';
import Chairs from './pages/Chairs/Chairs'
import China from './pages/China/China';
import Cookware from './pages/Cookware/Cookware';
import Concession from './pages/Concession/Concession';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
);

export default {
  Bar,
  Canopy,
  Chairs,
  China,
  Cookware,
  Concession,
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

