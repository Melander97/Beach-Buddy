import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
import { Outlet } from 'react-router-dom';
import { UserProvider, useUser } from './components/context/UserContext';
import { Routes, Route } from 'react-router-dom';
import Protected from './components/protected/protected'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserProfile from './pages/UserProfile';
import AddLocation from './pages/AddLocation';
// import React, {useEffect, useState} from 'react';
import LocationId from './pages/locationid/LocationId'


function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/login" element={ <Login />}/>
          <Route path="/register" element={ <Register />}/>
          <Route path="/location" element={ <LocationId />}/>
          <Route path="/profile" element={
          <Protected redirectTo="/login">
            <UserProfile/>
          </Protected>}/>
            
          <Route path="add-location" element={  
          <Protected redirectTo="/login">
          <AddLocation /> 
          </Protected>}/>
          
      </Routes>
    <Outlet/>
        {/* If viewport is phone do not render footer */}
    <Footer/>

    </div>
  );
} 

export default App;
