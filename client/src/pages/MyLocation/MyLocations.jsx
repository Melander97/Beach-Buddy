import React, { useState, useMemo, useEffect } from "react";
import "./my-locations.scss";
import { useUser } from "../../components/context/UserContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import MyLocation from "../../components/my-location/MyLocation";
import { coords$, getLocation } from "../../services/bad_havs_API";
import locationService from "../../services/userLocationService";
import { userLocations$ } from "../../services/userLocationService";

const libraries = ["places"];
const MyLocations = () => {
  const user = useUser();
  //Storing map
  const [userMap, setUserMap] = useState(null);
  //Users current geo location
  const [myLocation, setMyLocation] = useState();
  //Array with all userLocations from backend
  const [userLocations, setUserLocations] = useState([]);

  //Changed when user clicks marker and makes MyLocation component visible
  // const [selected, setSelected] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState();

  //Used to center the map
  const center = useMemo(() => myLocation, [myLocation]);
  // const userMap = useMemo(() => map, [map]);

  useEffect(() => {
    locationService.getAllLocations();
    getLocation();
    userLocations$.subscribe((res) => {
      setUserLocations(res);
    });

    coords$.subscribe((coords) => {
      setMyLocation(coords);
    });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    libraries: libraries,
  });

  const markerClickHandle = (location) => {
    setSelectedLocation(location);
  };

  // const viewClickHandler = () => {};
  const renderUserMap = () => {
    return (
      <div class="map-component">
        <MyLocation selectedLocation={selectedLocation} user={user} />

        <GoogleMap
          center={center}
          zoom={8}
          mapContainerClassName="map-container"
          onLoad={(map) => {
            if (userMap === null) {
              setUserMap(map);
            }
          }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerClusterer
            // imagePath={
            //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            // }
            /* onLoad={() => {
              console.log("cluster rendered");
            }} */
            onClick={(e) => {
              // console.log(e);
            }}
          >
            {(clusterer) =>
              userLocations?.map((location, index) => (
                <Marker
                  visible={true}
                  key={index}
                  /* onLoad={() => {
                  }} */
                  icon={
                    user.user.id === location.userId
                      ? require("../../assets/images/google-maps/swim-orange.png")
                      : require("../../assets/images/google-maps/swim-blue.png")
                  }
                  clusterer={clusterer}
                  position={{
                    lat: location.coordinates[0],
                    lng: location.coordinates[1],
                  }}
                  onClick={(mark, e) => {
                    markerClickHandle(location);
                  }}
                ></Marker>
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </div>
    );
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderUserMap() : "Couldn't render map";
};

export default MyLocations;
