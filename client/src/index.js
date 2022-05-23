import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserProfile from './pages/UserProfile';
import AddLocation from './pages/AddLocation';
import LocationId from './pages/locationid/LocationId';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App/>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
