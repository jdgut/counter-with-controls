import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/styles.scss'
import reportWebVitals from './reportWebVitals';
 import { renderStaticComponent } from './helpers/counterHelpers';

const root = ReactDOM.createRoot(document.getElementById('root'));
renderStaticComponent(0, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
