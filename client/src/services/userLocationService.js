import axios from "axios";
import { BehaviorSubject } from "rxjs";

// const userLocationURL = "http://localhost:4000/api/locations/getLocation";
const base_URL = "http://localhost:4000/api/locations/";
// const URL_API_DELETE_LOC =
//   "https://beach-buddy.herokuapp.com/api/locations/delete";
// const base_URL = "https://beach-buddy.herokuapp.com/api/locations/";
const heroku_url = "https://beach-buddy.herokuapp.com/api/locations/";

export const userLocations$ = new BehaviorSubject();
export const viewLocation$ = new BehaviorSubject();

// const URL_API_DELETE_LOC = "http://localhost:4000/api/locations/delete";

// const locations$ = new BehaviorSubject();

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
  const res = await axios.get(`${heroku_url}getLocation/${locationId}`, config);
  viewLocation$.next(res.data.data);
};

const addLocation = async (locationData) => {
  const res = await axios
    .post(`${heroku_url}addLocation`, locationData, config)
    .then((data) => {
      return data.data;
    });
  return res;
};

const deleteLocation = async (id) => {
  // console.log("id userlocationService", id);
  const res = await axios.delete(`${heroku_url}/delete/${id}`, config);
  console.log(res);
};

const updateLocation = async (updateData) => {
  const res = await axios.patch(
    `${base_URL}/updateLocation`,
    updateData,
    config
  );
  return res;
};

const locationService = {
  getAllLocations,
  getLocationById,
  addLocation,
  deleteLocation,
  updateLocation,
};
export default locationService;
