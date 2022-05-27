import Navbar from "./components/navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Protected from './components/protected/protected'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddLocation from './pages/addlocation/AddLocation';
import React from 'react';
import LocationId from './pages/locationid/LocationId'
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <div className="App">
      <div className="pageWrapper">

      <Navbar />
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/login" element={ <Login />}/>
          <Route path="/register" element={ <Register />}/>
          <Route path="/location" element={ <LocationId />}/>
          <Route path="/addlocation" element={ <AddLocation />}/>
          <Route path="/profile" element={
          <Protected redirectTo="/login">
            <Profile />
          </Protected>}/>
            
          <Route path="add-location" element={  
          <Protected redirectTo="/login">
            <AddLocation /> 
          </Protected>}/>
          
      </Routes>
      <Outlet/>
      </div>

    </div>
  );
} 

export default App;
