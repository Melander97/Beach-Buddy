/* eslint-disable no-undef */

import React, { useEffect, useMemo, useState } from 'react'
import { ScriptLoaded, GoogleMap, useLoadScript, Marker, Autocomplete, InfoWindow, MarkerClusterer} from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { getAllBeaches, swimLocation$ } from '../../services/bad_havs_API';

const libraries = ['places']
const GoogleMaps = () => {
    const [map, setMap] = useState();
    const [geoLocation, setGeoLocation] = useState();
    const [beaches, setBeaches] = useState([]);
    //Search states
    const [city, setCity] = useState('');
    //Is set but never read?
    const [coords, setCoords] = useState({lat: null, lng:null});
    
    const center = useMemo(() => (geoLocation), [geoLocation]);
    
    useEffect(() => {
        getLocation();

        getAllBeaches();
        swimLocation$.subscribe(data => {
            let currentArr = beaches;
            setBeaches([data, ...currentArr]);
        })
    }, [])
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
        // googleMapsApiKey: "AIzaSyC01RQkQ0NYA_8B8eRbDLf8WfLOlubH-GA",
        libraries: libraries
      });

    async function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(location => {
                const lat = location.coords.latitude;
                const long = location.coords.longitude;
                
                    setGeoLocation({
                    lat: lat,
                    lng: long
                })
            })
        }
    }

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
                                    backgroundColor: suggestion.active ? "#7ddbd7" : "#fff"
                                }
                                //Looks for the suggestions and applies the background style depending on if it's active or not(mouse hover or keyboard select)
                                return <div key={i} {...getSuggestionItemProps(suggestion, { style })}>
                                   {suggestion.description}</div>
                            })}
                        </div>
                    </div>
                    
                    
                    )}

                    </PlacesAutocomplete>
                    {/* Functionality of this button will be found in the the quick access bar */}
                    {/* <button onClick={() => map.panTo(center)}>My position</button> */}
                </div>
                <GoogleMap
                center={center}
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