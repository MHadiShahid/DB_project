import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <Router>
          <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
          </Routes>
    </Router>
    
  </React.StrictMode>
);

