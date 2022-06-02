import axios from "axios";
import { BehaviorSubject } from "rxjs";

const userLocationURL = "http://localhost:4000/api/locations/getLocation";
const base_URL = "http://localhost:4000/api/locations/";
const heroku_url = "https://beach-buddy.herokuapp.com/api/locations/";
// const base_URL = "https://beach-buddy.herokuapp.com/api/locations/";

export const userLocations$ = new BehaviorSubject();
export const viewLocation$ = new BehaviorSubject();

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
const getAllLocations = async () => {
  const res = await axios.get(`${heroku_url}getLocation`, config);

  if (res.data.success) {
    // console.log(res.data);
    userLocations$.next(res.data.data);
  }
};

const getLocationById = async (locationId) => {
  console.log(locationId);
  const res = await axios.get(`${base_URL}getLocation/${locationId}`, config);
  viewLocation$.next(res.data.data);
  // return res;
};

const addLocation = async (locationData) => {
  // console.log(locationData);
  const res = await axios.post(
    `${heroku_url}addLocation`,
    locationData,
    config
  );
  console.log(res);
};
const locationService = {
  getAllLocations,
  getLocationById,
  addLocation,
};

export default locationService;
