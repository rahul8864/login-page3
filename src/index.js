import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignInScreen from './SignInScreen'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignInScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
