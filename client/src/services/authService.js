import axios from "axios";
import { BehaviorSubject } from "rxjs";

// const API_URL = "http://localhost:4000/api/users";
// const API_URL_LOGIN = "http://localhost:4000/api/users/login";
// const getUserById = "http://localhost:4000/api/users/";
// const API_URL_DELETE = "http://localhost:4000/api/users/delete/";
const API_URL = "https://beach-buddy.herokuapp.com/api/users";
const API_URL_LOGIN = "https://beach-buddy.herokuapp.com/api/users/login";
const getUserById = "https://beach-buddy.herokuapp.com/api/users/";
const API_URL_DELETE = "https://beach-buddy.herokuapp.com/api/users/delete/";

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
    const res = await axios.post(API_URL_LOGIN, loginData, config);
    if (res.data.success) {
      user$.next(res.data);
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const updateAccountFunction = async (updatedUserInfo, userId) => {
  const res = await axios.patch(
    `${API_URL}/update/${userId}`,
    updatedUserInfo,
    config
  );
  user$.next(res.data);
  return res.data;
};

const getUser = async (userId) => {
  const res = await axios.get(`${getUserById}${userId}`, config);
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
