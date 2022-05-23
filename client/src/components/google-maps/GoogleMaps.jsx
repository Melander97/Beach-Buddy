/* eslint-disable no-undef */

import React, { useEffect, useMemo, useState } from 'react'
import { ScriptLoaded, GoogleMap, useLoadScript, Marker, Autocomplete, InfoWindow, MarkerClusterer} from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete';

const libraries = ['places']
const GoogleMaps = () => {
    const [map, setMap] = useState();

    //Search states
    const [city, setCity] = useState();
    const [coords, setCoords] = useState({lat: null, lng:null});
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
        // googleMapsApiKey: "AIzaSyC01RQkQ0NYA_8B8eRbDLf8WfLOlubH-GA",
        libraries: libraries
      });


    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latLng = await getLatLng(result[0]);
        setCoords(latLng);
        // console.log(coords);
        //Need to click the select dropdown for it to pan to hte location
        //Currently double action is neccessary to pan to the location, why?
        map.panTo(latLng);
    }

    const renderMap = () => {
        return(
            <>
            <div className="info-box">
                    <PlacesAutocomplete value={city} onChange={setCity} onSelect={handleSelect}>
                    {/* PlacesAutoComplete takes in a child props function to handle input values and displaying the suggestion results */}
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        {/* <p>Latitude: {coords.lat}</p>
                        <p>Longitude: {coords.lng}</p> */}
                        <input className="search" {...getInputProps({ placeholder: "Search city", type: "text"})} />

                        <div className='suggestions'>
                            {loading ? <div>loading...</div> : null}
                            {suggestions.map((suggestion, i) => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#CFCFCF" : "#fff"
                                }
                                //Looks for the suggestions and applies the background style depending on if it's active or not(mouse hover or keyboard select)
                                return <div key={i} {...getSuggestionItemProps(suggestion, { style })}>
                                   {suggestion.description}</div>
                            })}
                        </div>
                    </div>
                    
                    
                    )}

                    </PlacesAutocomplete>
                    {/* <Autocomplete>
                    <input type="text" placeholder="Search location"/>
                    </Autocomplete> */}
                    <button onClick={() => map.panTo(center)}>My position</button>
                </div>
                <GoogleMap
                center={{lat: 56.510615499479705, lng: 16.436195173518588}}
                zoom={8}
                mapContainerClassName="map-container"
                onLoad={(map) => setMap(map)}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false
                }}
                
                >


                </GoogleMap>
            </>
        )
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
      }
    
      return isLoaded ? renderMap() : "Couldn't render map";
}

export default GoogleMaps;