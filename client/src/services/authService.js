import axios from "axios";

const API_URL = "http://localhost:4000/api/users";

const registerFunction = async (userData) => {

  try {
    const result = await axios.post(API_URL, userData);
    return result.data;
  } catch (error) {
    if (error.response) {
    return error.response.data;
    }
  }
};

const authService = {
  registerFunction,
};
export default authService;
