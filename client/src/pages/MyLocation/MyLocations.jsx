import React, { useState, useMemo, useEffect } from "react";
import "./my-locations.scss";
import {
  ScriptLoaded,
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import MyLocation from "../../components/my-location/MyLocation";
import { coords$, getLocation } from "../../services/bad_havs_API";
import locationService from "../../services/userLocationService";
import { userLocations$ } from "../../services/userLocationService";

// const libraries = ["places"];
const MyLocations = () => {
  const [map, setMap] = useState();
  const [myLocation, setMyLocation] = useState();
  const [userLocations, setUserLocations] = useState();
  const [selected, setSelected] = useState({ lat: null, lng: null });

  const center = useMemo(() => myLocation, [myLocation]);

  useEffect(() => {
    locationService.getAllLocations();
    getLocation();

    if (!myLocation) {
      coords$.subscribe((coords) => {
        // console.log(coords);
        setMyLocation(coords);
      });
    }
    userLocations$.subscribe((res) => {
      console.log(res);
    });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    // googleMapsApiKey: "AIzaSyC01RQkQ0NYA_8B8eRbDLf8WfLOlubH-GA",
    // libraries: libraries,
  });
  const renderUserMap = () => {
    return (
      <div class="map-component">
        {/* w-full h-5/6 flex items-center justify-center my-3 */}
        {/* {myLocation && <p>{myLocation.lat}</p>} */}
        <MyLocation />
        <GoogleMap
          center={center}
          zoom={8}
          mapContainerClassName="map-container"
          onLoad={(map) => setMap(map)}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        ></GoogleMap>
      </div>
    );
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderUserMap() : "Couldn't render map";
};

export default MyLocations;
