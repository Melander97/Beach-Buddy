import axios from "axios";
import { BehaviorSubject } from "rxjs";


const URL_API_DELETE_LOC = "https://beach-buddy.herokuapp.com/api/locations/delete";

// const URL_API_DELETE_LOC = "http://localhost:4000/api/locations/delete";

const locations$ = new BehaviorSubject();

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const deleteLocation = async (id) => {
  console.log("id userlocationService", id);
  try {
    const res = await axios.post(`${URL_API_DELETE_LOC}`, { data: {user: "62973c1bf8a04881eb0a92bd", locationId: "62973c40f8a04881eb0a92c0"}});
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
  // locations$.next(res);
};
const userLocationService = {
  deleteLocation,
};

export default userLocationService;
