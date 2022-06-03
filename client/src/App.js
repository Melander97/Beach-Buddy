import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/protected/protected";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddLocation from "./pages/addlocation/AddLocation";
import UpdateLocation from "./pages/updateLocation/UpdateLocation";
import LocationId from "./pages/locationid/LocationId";
import Profile from "./pages/profile/Profile";
import Menu from "./components/menu/Menu";
import MyLocations from "./pages/MyLocation/MyLocations";
import UserMenu from "./components/user-menu/UserMenu";
import { useUser } from "./components/context/UserContext";


function App() {
  // const { user } = useUser();
  let user = localStorage.getItem("user");
  return (
    <div className="App">
      <Navbar />
      <div className="pageWrapper">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/locationId" element={<LocationId />} />

          <Route
            path="/profile"
            element={
              <Protected redirectTo="/login">
                <Profile />
              </Protected>
            }
          />

          <Route
            path="add-location"
            element={
              <Protected redirectTo="/login">
                <AddLocation />
              </Protected>
            }
          />
          <Route
            path="update-location"
            element={
              <Protected redirectTo="/login">
                <UpdateLocation />
              </Protected>
            }
          />

          <Route
            path="locations"
            element={
              <Protected redirectTo="/login">
                <MyLocations />
              </Protected>
            }
          />
          <Route
            path="update-location"
            element={
              <Protected redirectTo="/login">
                <UpdateLocation />
              </Protected>
            }
          />
        </Routes>
        <Outlet />
        {/* {user !== undefined && 
        <UserMenu/>
      } */}
        {/* {user.isLoggedIn === false || user === undefined ? <Menu /> : <UserMenu />} */}
      </div>
      {/* <Menu /> */}
      <UserMenu/>

    </div>
  );
}

export default App;
