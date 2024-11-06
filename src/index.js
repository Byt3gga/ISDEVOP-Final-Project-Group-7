// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom' depending on your React version
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
