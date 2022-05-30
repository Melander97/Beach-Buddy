import axios from "axios";
import { BehaviorSubject } from "rxjs";

const userLocationURL = "http://localhost:4000/api/locations/getLocation";

export const userLocations$ = new BehaviorSubject();
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
const getAllLocations = async () => {
  const res = await axios.get(userLocationURL, config);

  if (res.data.success) {
    userLocations$.next(res.data.data);
  }
};

const locationService = {
  getAllLocations,
};

export default locationService;
