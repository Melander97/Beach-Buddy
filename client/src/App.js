import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
import { Outlet } from 'react-router-dom';
import { UserProvider, useUser } from './components/context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import AddLocation from './pages/AddLocation';
import React, {useEffect, useState} from 'react';
import Protected from './components/protected/protected'


function App() {


  // const [loggedInUser, setloggedInUser] = useState();

  // useEffect(()=>{
  //   setloggedInUser(user)
  // },[]);


  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route to="/">
            <Route index element={<Home />}/>

              <Route path="login" element={ <Login />}/>
              <Route path="register" element={ <Register />}/>

              {/* <Route path="profile" element={<UserProfile/>}/> */}

              <Route path="profile" element={<Protected><UserProfile /></Protected>}/>
              
              <Route path="add-location" element={ <AddLocation />}/>
            </Route>
      </Routes>
      <Outlet />

    </BrowserRouter>

    {/* <Navbar /> */}
    {/* <UserProvider> */}
    {/* <Outlet /> */}
    {/* </UserProvider> */}

    {/* If viewport is phone do not render footer */}
    <Footer/>
    </div>
  );
} 

export default App;
