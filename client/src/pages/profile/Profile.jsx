import React, { useState, useContext, useEffect } from "react";
import "./profile.scss";
import { useUser } from "../../components/context/UserContext";
import UpdateAccount from "../../components/update-account/UpdateAccount";
import UpdateLocation from "../../components/update-location/UpdateLocation";
import authService from "../../services/authService";
import { userLocations$ } from "../../services/authService";

const Profile = () => {
  const [userLocations, setUserLocation] = useState([]);
  const user = useUser();
  const userId = user.user.id;

  useEffect(() => {
    const res = authService.getUser(user.user.id);
    userLocations$.subscribe((data) => {
      if (data) {
        setUserLocation(data.data.user[0].locations);
      }
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile-info">
        <i className="fa-solid fa-person-drowning fa-2xl mb-5"></i>

        <h1>Name: {user.user.name}</h1>
        <h1>Email: {user.user.email}</h1>
      </div>

      <div className="profile-inner w-full md:w-3/5 mx-auto p-8">
        <div className="full__width shadow-md">
          <UpdateAccount userId={userId} />

          <div className="wrapper">
            <div className="accordion">
              {userLocations?.map((location, index) => (
                <UpdateLocation
                  key={index}
                  location={location}
                  i={index}
                  locationsArray={userLocations}
                  setUserLocation={setUserLocation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
