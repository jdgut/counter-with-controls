import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/styles.scss'
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import { increaseCounter } from './helpers/counterHelpers';

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
const counterInterval = setInterval(() => {
  root.render(
    <React.StrictMode>
      <Counter digits={seconds} intervalId={counterInterval} />
    </React.StrictMode>
  );
  seconds = increaseCounter(seconds);
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
