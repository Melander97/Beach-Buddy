import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/protected/protected";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddLocation from "./pages/addlocation/AddLocation";
import UpdateLocation from "./pages/updatelocation/UpdateLocation";
import LocationId from "./pages/locationid/LocationId";
import Profile from "./pages/profile/Profile";
import Menu from "./components/menu/Menu";
import MyLocations from "./pages/MyLocation/MyLocations";
import UserMenu from "./components/user-menu/UserMenu";
import { useUser } from "./components/context/UserContext";
import Notfound from "./pages/not-found/NotFound";
import Help from "./components/help-modal/Help";
import React, { useEffect, useState } from "react";
import { contextUser$ } from "../src/components/context/UserContext";
import NotFound from "./pages/not-found/NotFound";

function App() {
  // const { user } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    contextUser$.subscribe((data) => {
      setIsLoggedIn(data);
    });
  }, []);

  let user = localStorage.getItem("user");
  return (
    <div className="App">
      <Navbar />
      <div className="pageWrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location/:id" element={<LocationId />} />
          {/* <Route path="/locationId" element={<LocationId />} /> */}
          <Route path="/help" element={<Help />} />

          <Route
            path="/profile"
            element={
              <Protected redirectTo="/login">
                <Profile />
              </Protected>
            }
          />

          <Route
            path="/add-location"
            element={
              <Protected redirectTo="/login">
                <AddLocation />
              </Protected>
            }
          />
          <Route
            path="/locations"
            element={
              <Protected redirectTo="/login">
                <MyLocations />
              </Protected>
            }
          />
          <Route
            path="/update-location"
            element={
              <Protected redirectTo="/login">
                <UpdateLocation />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Outlet />
      </div>

      {isLoggedIn === null || isLoggedIn.isLoggedIn === false ? (
        <Menu />
      ) : (
        <UserMenu />
      )}
    </div>
  );
}

export default App;
