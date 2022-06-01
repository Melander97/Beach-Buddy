import axios from "axios";

const URL_API_DELETE_LOC = "http://localhost:4000/api/locations/delete";
//  const locations$ = new BehaviorSubject();
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
// const handledeleteLocationClick = async (e) =>{
//   e.preventdefault();
// }
const deleteLocation = async (id) => {
  console.log("id", id);
  try {
    const res = await axios.delete(`${URL_API_DELETE_LOC}/${id}`, { data: { user_id: "62973c1bf8a04881eb0a92bd" } });
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
