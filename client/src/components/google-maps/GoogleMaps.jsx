/* eslint-disable no-undef */

import React, { useEffect, useMemo, useState } from 'react'
import { ScriptLoaded, GoogleMap, useLoadScript, Marker, Autocomplete, InfoWindow, MarkerClusterer} from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete';

const libraries = ['places']
const GoogleMaps = () => {
    const [map, setMap] = useState();
    const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
        googleMapsApiKey: "AIzaSyC01RQkQ0NYA_8B8eRbDLf8WfLOlubH-GA",
        libraries: libraries
      });

    const renderMap = () => {
        return(
            <GoogleMap
            center={{lat: 56.510615499479705, lng: 16.436195173518588}}
            zoom={8}
            mapContainerClassName="map-container"
            onLoad={(map) => setMap(map)}

            >


            </GoogleMap>
        )
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
      }
    
      return isLoaded ? renderMap() : "Couldn't render map";
}

export default GoogleMaps;