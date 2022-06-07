import axios from "axios";
import { BehaviorSubject } from "rxjs";

const API_URL = "http://localhost:4000/api/users";
const API_URL_LOGIN = "http://localhost:4000/api/users/login";
const getUserById = "http://localhost:4000/api/users/";
const API_URL_DELETE = "http://localhost:4000/api/users/delete/";
// const API_URL = "https://beach-buddy.herokuapp.com/api/users";
// const API_URL_LOGIN = "https://beach-buddy.herokuapp.com/api/users/login";
// const getUserById = "https://beach-buddy.herokuapp.com/api/users/";
// const API_URL_DELETE = "https://beach-buddy.herokuapp.com/api/users/delete/";

export const user$ = new BehaviorSubject();
export const userLocations$ = new BehaviorSubject();

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

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

const loginFunction = async (loginData) => {
  try {
    // calls the api
    const res = await axios.post(API_URL_LOGIN, loginData, config);
    //If true, write response to observable user$
    if (res.data.success) {
      user$.next(res.data);
      // user.updateUser(res.data.data.id, res.data.data.email, res.data.data.name, res.data.success);
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const updateAccountFunction = async (updatedUserInfo, userId) => {
  // console.log(userId);
  const res = await axios.patch(
    `${API_URL}/update/${userId}`,
    updatedUserInfo,
    config
  );
  user$.next(res.data);
  console.log(res.data);
  return res.data;
  /* try {
    const res = await axios.patch(
      `${API_URL}/update/628ff47d252c91d0eec404ec`,
      updatedUserInfo,
      config
    );
    if (res.data.success) {
      user$.next(res.data);
      console.log(`SVAR ${res.data}`);
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  } */
};

// Skaapa en funktion som skickar uppdaterad data till databasen, samt returnerar den för att den ska finnas tillgänglig för FE
//
const getUser = async (userId) => {
  const res = await axios.get(`${getUserById}${userId}`, config);
  // console.log(res);
  userLocations$.next(res);
};

const deleteUser = async (id) => {
  await axios.delete(`${API_URL_DELETE}${id}`, config);
};

const authService = {
  registerFunction,
  loginFunction,
  updateAccountFunction,
  getUser,
  deleteUser,
};
export default authService;
