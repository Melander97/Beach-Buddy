import React, { useState, useMemo, useEffect } from "react";
import "./my-locations.scss";
import { useUser } from "../../components/context/UserContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import MyLocation from "../../components/my-location/MyLocation";
import { coords$, getLocation } from "../../services/bad_havs_API";
import locationService from "../../services/userLocationService";
import { userLocations$ } from "../../services/userLocationService";
import { Link } from "react-router-dom";

const libraries = ["places"];
const MyLocations = () => {
  const user = useUser();
  //Storing map
  const [userMap, setUserMap] = useState(null);
  const [marker, setMarker] = useState([]);
  //Sets state to clicked pinpoint marker. Is it needed?
  const [activeMarker, setActiveMarker] = useState();
  //Users current geo location
  const [myLocation, setMyLocation] = useState();
  //Array with all userLocations from backend
  const [userLocations, setUserLocations] = useState([]);

  //Changed when user clicks marker and makes MyLocation component visible
  const [selected, setSelected] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState();

  //Used to center the map
  const center = useMemo(() => myLocation, [myLocation]);

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

  const removeLocation = async (id) => {
    locationService.deleteLocation(id).then((data) => {
      if (data.data.success) {
        const filterArray = userLocations.filter((value) => value._id !== id);
        setUserLocations(filterArray);
        setSelectedLocation(false);
      }
    });
  };

  //Creates pinpoint on map
  const setLocation = (e) => {
    const currentMarker = [];
    setMarker([e.latLng.toJSON(), ...currentMarker]);
  };
  const renderUserMap = () => {
    return (
      <div class="map-component">
        <MyLocation
          selectedLocation={selectedLocation}
          user={user}
          removeLocation={removeLocation}
        />

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
          onClick={(e) => {
            setLocation(e);
          }}
        >
          <MarkerClusterer>
            {(clusterer) =>
              userLocations?.map((location, index) => (
                <Marker
                  visible={true}
                  key={index}
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

          {marker.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              // eslint-disable-next-line no-undef
              animation={google.maps.Animation.DROP}
              onClick={(mark) => {
                setSelected(marker);
                setActiveMarker(mark);
              }}
            ></Marker>
          ))}

          {selected ? (
            <InfoWindow
              // eslint-disable-next-line no-undef
              options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
              position={activeMarker.latLng.toJSON()}
              onClick={(e) => {}}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <>
                <h1 className="info-window-header">Spara din egna favorit!</h1>
                <Link
                  className="info-window-link"
                  to="/add-location"
                  state={{ from: marker }}
                >
                  Lägg till plats
                </Link>
              </>
            </InfoWindow>
          ) : null}
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
