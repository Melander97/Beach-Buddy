import React, { useState, useMemo, useEffect, useRef } from "react";
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
import { map } from "rxjs";

const libraries = ["places"];
const MyLocations = () => {
  //Storing map
  //map.current to user ref
  const [userMap, setUserMap] = useState(null);
  // const map = useRef(null);
  const [myLocation, setMyLocation] = useState();
  const [userLocations, setUserLocations] = useState([]);

  //check if there are locations collected
  // const [isLocation, setIsLocation] = useState(false);

  //Changed when user clicks marker and makes MyLocation component visible
  const [selected, setSelected] = useState(false);

  const center = useMemo(() => myLocation, [myLocation]);
  // const userMap = useMemo(() => map, [map]);

  useEffect(() => {
    locationService.getAllLocations();
    getLocation();
    userLocations$.subscribe((res) => {
      // let currentArr = userLocations;
      setUserLocations(res);
      console.log("userLocation is set");
    });

    coords$.subscribe((coords) => {
      setMyLocation(coords);
      console.log("myLocation is set");
    });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
    // googleMapsApiKey: "AIzaSyC01RQkQ0NYA_8B8eRbDLf8WfLOlubH-GA",
    libraries: libraries,
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
          onLoad={(map) => {
            if (userMap === null) {
              setUserMap(map);
              console.log("map is set in render");
            }
            console.log("map rendered");
          }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {/* {userMap &&
            userLocations.map((location, index) => (
              <Marker
                visible={true}
                key={index}
                // icon={require("../../assets/images/google-maps/swim-blue.png")}
                icon={
                  index % 2 === 0
                    ? require("../../assets/images/google-maps/swim-orange.png")
                    : require("../../assets/images/google-maps/swim-blue.png")
                }
                // clusterer={clusterer}
                // position={{
                //   lat: 59.3340481,
                //   lng: 18.0359596,
                // }}
                position={{
                  lat: location.coordinates[0],
                  lng: location.coordinates[1],
                }}
              ></Marker>
            ))} */}

          <MarkerClusterer
            // imagePath={
            //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            // }
            onLoad={() => {
              console.log("cluster rendered");
            }}
            onClick={(e) => {
              console.log(e);
            }}
          >
            {(clusterer) =>
              userLocations?.map((location, index) => (
                <Marker
                  // visible={true}
                  key={index}
                  onLoad={() => {
                    console.log("marker rendered");
                  }}
                  // icon={require("../../assets/images/google-maps/swim-blue.png")}
                  icon={
                    index % 2 === 0
                      ? require("../../assets/images/google-maps/swim-orange.png")
                      : require("../../assets/images/google-maps/swim-blue.png")
                  }
                  clusterer={clusterer}
                  // position={{
                  //   lat: 59.3340481,
                  //   lng: 18.0359596,
                  // }}
                  position={{
                    lat: location.coordinates[0],
                    lng: location.coordinates[1],
                  }}
                  onClick={(mark, e) => {
                    //   markerClickHandle(marker);
                    //   setActiveMarker(mark);
                    //   setSelected(marker);
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
