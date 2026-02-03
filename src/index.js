import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Suppress benign ResizeObserver loop errors (e.g. from react-hot-toast / layout shifts)
const resizeObserverErr = window.onerror;
window.onerror = function (message, ...args) {
  if (
    typeof message === 'string' &&
    (message.includes('ResizeObserver loop') || message.includes('ResizeObserver loop limit exceeded'))
  ) {
    return true;
  }
  return resizeObserverErr ? resizeObserverErr(message, ...args) : false;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
