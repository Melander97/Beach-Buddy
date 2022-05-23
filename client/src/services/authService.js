import axios from "axios";

const API_URL = "http://localhost:4000/api/users";

const registerFunction = async (userData) => {
  try {
    await axios.post(API_URL, userData);
  } catch (error) {
    if (error.response) {
      return error.response.data.msg;
    }
  }
};

const authService = {
  registerFunction,
};
export default authService;
