import axios from "axios";


const URL_API_DELETE_LOC = "http://localhost:4000/api/locations/delete"

const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };


  const deleteLocation = async (locationData) => {
    try {
      const result = await axios.delete(URL_API_DELETE_LOC, locationData);
      return result.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      }
    }
  };