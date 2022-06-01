import axios from "axios";
import { BehaviorSubject } from "rxjs";

const userLocationURL = "http://localhost:4000/api/locations/getLocation";
const base_URL = "http://localhost:4000/api/locations/";
// const base_URL = "https://beach-buddy.herokuapp.com/api/locations/";

export const userLocations$ = new BehaviorSubject();
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
const getAllLocations = async () => {
  const res = await axios.get(userLocationURL, config);

  if (res.data.success) {
    // console.log(res.data);
    userLocations$.next(res.data.data);
  }
};

const getLocationById = async (locationId) => {
  const res = await axios.get(`${base_URL}getLocationById`, config);
  console.log(res);
};

const locationService = {
  getAllLocations,
  getLocationById,
};

export default locationService;
